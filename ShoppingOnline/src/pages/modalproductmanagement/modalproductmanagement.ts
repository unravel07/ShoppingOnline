import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-modalproductmanagement',
  templateUrl: 'modalproductmanagement.html',
})
export class ModalproductmanagementPage {
  mymodel:any = { };
  name: any;
  price: any;
  amount: any;
  description: any;
  picture: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalproductmanagementPage');
  }
  product(){
    let option = { "headers": { "Content-Type": "application/json" } };
    this.http.post("http://localhost:59039/api/Shooping/addProdcut",
    {
      "name": this.name,
      "price": this.price,
      "amount": this.amount,
      "description": this.description,
      "picture": this.picture,
    }).subscribe(
        it => {
        // SUCCESS: Do something
        }, 
        error => {
            // ERROR: Do something
        }); 




  }
}
