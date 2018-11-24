import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  Purchase()
  {
         const confirm = this.alertCtrl.create({
        title: 'ยืนยันการสั่งซื้อ',
       
        buttons: [
          {
            text: 'ยันยืน',
            handler: () => {
              console.log('Disagree clicked');
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
