using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using WebAPI.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/[controller]/[action]")]

    public class ShoppingController : Controller
    {
        IMongoCollection<Product> Product { get; set; }
        IMongoCollection<Cart> Cart { get; set; }

        public ShoppingController()
        {
            var settings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://krit_NA:thegigclubna2522@ds125322.mlab.com:25322/kritna"));
            settings.SslSettings = new SslSettings()
            {
                EnabledSslProtocols = SslProtocols.Tls12
            };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("kritna");
            Product = database.GetCollection<Product>("Product");
            Cart = database.GetCollection<Cart>("Cart");
        }

        [HttpGet]
        public IEnumerable<Product> GetAllProduct()
        {
            var products = Product.Find(it => true).ToList();
            return products;
        }

        [HttpGet("id")]
        public Product GetProduct(string id)
        {
            var getProduct = Product.Find(it => it.Id == id).FirstOrDefault();
            return getProduct;
        }

        [HttpPost]
        public void AddProdcut([FromBody]Product product)
        {
            product.Id = Guid.NewGuid().ToString();
            Product.InsertOne(product);
        }

        [HttpPost]
        public void EditProduct([FromBody]Product product)
        {
            Product.ReplaceOne(it => it.Id == product.Id, product);
        }

        [HttpPost]
        public void DeleteProduct(string id)
        {
            Product.DeleteOne(it => it.Id == id);
        }

        [HttpPost]
        private void CreateCart()
        {
            var cart = new Cart();
            cart.Id = "ShoppingOnline";
            cart.Products = new List<Product>();
            Cart.InsertOne(cart);
        }

        [HttpPost]
        public void AddProductToCart(string id, int buyAmount)
        {
            var product = Product.Find(it => it.Id == id).FirstOrDefault();
            product.Amount -= buyAmount;
            Product.ReplaceOne(it => it.Id == id, product);
            product.Amount = buyAmount;
            if (!Cart.Find(it => true).Any())
            {
                CreateCart();
            }
            var cart = Cart.Find(it => it.Id == "ShoppingOnline").FirstOrDefault();
            if (cart.Products.Any(it => it.Id == id))
            {
                var productInCart = cart.Products.Find(it => it.Id == id);
                product.Amount += productInCart.Amount;
                cart.Products.Remove(productInCart);
            }
            cart.Products.Add(product);
            Cart.ReplaceOne(it => it.Id == "ShoppingOnline", cart);
        }

        [HttpGet]
        public IEnumerable<Product> GetProductInCart()
        {
            var cart = Cart.Find(it => it.Id == "ShoppingOnline").FirstOrDefault();
            return cart.Products;
        }

        [HttpPost]
        public void RemoveProduct(string id)
        {
            var cart = Cart.Find(it => it.Id == "ShoppingOnline").FirstOrDefault();
            var productInCart = cart.Products.Find(it => it.Id == id);
            cart.Products.Remove(productInCart);
            Cart.ReplaceOne(it => it.Id == "ShoppingOnline", cart);
            var productInStock = Product.Find(it => it.Id == id).FirstOrDefault();
            productInStock.Amount += productInCart.Amount;
            Product.ReplaceOne(it => it.Id == id, productInStock);
        }

        [HttpPost]
        public void Purchase()
        {
            Cart.DeleteMany(it => true);
        }
    }
}
