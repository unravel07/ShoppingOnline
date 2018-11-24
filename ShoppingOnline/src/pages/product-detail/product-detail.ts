import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../app/Model';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  Pid : any
  products: Product = new Product;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.Pid = navParams.data("product");
    this.http.get<Product>("http://localhost:5000/api/Shooping/GetProduct/"+this.Pid)
    .subscribe(data => {
      this.products = data
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  addCart(){
    this.navCtrl.push(CartPage,{id:this.Pid});
  }

}
