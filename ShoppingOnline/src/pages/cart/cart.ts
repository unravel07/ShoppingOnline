import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../app/Model';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  result: number = 0;
  amount: number;
  price: number;
  address: string;

  getProducts: Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {

    this.http.get<Product[]>("http://localhost:5000/api/Shopping/GetProductInCart").subscribe(
      it => {
        this.getProducts = it
        this.funcCal(this.getProducts);
      },
      error => {
        // ERROR: Do something
      });
  }

  funcCal(data: Product[]) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      this.result += (data[i].amount * data[i].prices);
    }
    console.log(this.result)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  Purchase() {
    const confirm = this.alertCtrl.create({
      title: 'ยืนยันการสั่งซื้อ',

      buttons: [
        {
          text: 'ยันยืน',
          handler: () => {
            // this.http.post<YOUR_MODEL_NAME>("ENTER_YOUR_API_HERE",
            //   {
            //     // PROPERTY_NAME_1: VALUE_1,
            //     // PROPERTY_NAME_2: VALUE_2
            //   }).subscribe(
            //     it => {
            //       // SUCCESS: Do something
            //     },
            //     error => {
            //       // ERROR: Do something
            //     });
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }




}
