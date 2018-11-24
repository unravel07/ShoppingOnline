import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../app/Model';

@IonicPage()
@Component({
  selector: 'page-modalproductmanagement',
  templateUrl: 'modalproductmanagement.html',
})
export class ModalproductmanagementPage {
  products:Product = new Product;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalproductmanagementPage');
  }
  product(){
    // let option = { "headers": { "Content-Type": "application/json" } };
    this.http.post("http://localhost:59039/api/Shoping/AddProdcut",
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
