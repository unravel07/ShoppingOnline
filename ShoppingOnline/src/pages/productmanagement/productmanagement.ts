import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../app/Model';

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
  data: any;
  number: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public http: HttpClient) {
  
    // get
    this.http.get<"YOUR_MODEL_NAME_HERE">("ENTER_YOUR_API_HERE").subscribe(
      it => {
          // SUCCESS: Do something
      }, 
      error => {
          // ERROR: Do something
      });

      // post
      this.http.post<"YOUR_MODEL_NAME">("ENTER_YOUR_API_HERE",
    {
        PROPERTY_NAME_1: "VALUE_1",
        PROPERTY_NAME_2: "VALUE_2"
    }).subscribe(
        it => {
        // SUCCESS: Do something
        }, 
        error => {
            // ERROR: Do something
        });
  
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductmanagementPage');
  }

  ionViewDidEnter() {
    this.http.get<Product>("http://localhost:59039/api/Shooping/getAllProduct").subscribe(
      it => {
          this.data = it
          console.log(this.data);
          this.number = this.data;
          console.log("xxx");
          console.log(this.number);

      }, 
      error => {
          // ERROR: Do something
      });
  }


  modal(){
    const modal = this.modalCtrl.create("ModalproductmanagementPage");
    modal.present();
  }
  delete(){
    
  }
}
