import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../app/Model';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ModaleditproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modaleditproduct',
  templateUrl: 'modaleditproduct.html',
})
export class ModaleditproductPage {
  products: Product = new Product;
  dataid:any;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.dataid=navParams.get("dataid");
    console.log(this.dataid);
    this.http.get<Product>("http://localhost:59039/api/Shoping/GetProduct/id?id="+this.dataid).subscribe(
      it => {
        this.products = it
        console.log(this.products);
        console.log(this.products.amount);
      },
      error => {
        // ERROR: Do something
      });


    // http://localhost:59039/api/Shoping/GetProduct/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModaleditproductPage');
  }
  Edit(){
    // http://localhost:59039/api/Shoping/EditProduct
    this.http.post("http://localhost:59039/api/Shoping/EditProduct",
      this.products
    ).subscribe(
        it => { 
        // SUCCESS: Do something
        }, 
        error => {
            // ERROR: Do something
        }); 


        this.navCtrl.pop();

  }

}
