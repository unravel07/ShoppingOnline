using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Cart
    {
        public string Id { get; set; }
        public List<Product> Products { get; set; }
    }
}
