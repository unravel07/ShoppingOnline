import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ProductmanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productmanagement',
  templateUrl: 'productmanagement.html',
})
export class ProductmanagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductmanagementPage');
  }
  modal(){
    const modal = this.modalCtrl.create("ModalproductmanagementPage");
    modal.present();
  }
  delete(){
    
  }
}
