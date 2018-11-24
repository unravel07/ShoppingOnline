import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../app/Model';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  segment: any;
  LoadData: any;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.segment = 'shopping';
    this.http.get("http://localhost:5000/api/Shoping/GetAllProduct").subscribe(data => {
      this.LoadData = data;
      console.log(this.LoadData);
    });
  }

  goDetail(productID: string) {
    this.http.get("http://localhost:5000/api/Shoping/GetProduct/" + productID).subscribe(data => {
      this.navCtrl.push(ProductDetailPage, {product: productID});
    });
  }
}
