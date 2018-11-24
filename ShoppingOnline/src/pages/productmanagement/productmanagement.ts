import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../app/Model';
@IonicPage()
@Component({
  selector: 'page-productmanagement',
  templateUrl: 'productmanagement.html',
})
export class ProductmanagementPage {
  data: any;
  number: any;
  id: any;
  products: Product = new Product;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: HttpClient) {
  }

  ionViewDidEnter() {
    this.http.get<Product>("http://localhost:59039/api/Shoping/GetAllProduct").subscribe(
      it => {
        this.data = it
        console.log(this.data);
      },
      error => {
        // ERROR: Do something
      });
  }


  modal() {
    const modal = this.modalCtrl.create("ModalproductmanagementPage");
    modal.present();
  }
  delete(id) {
    this.id = id;
    console.log(this.id);
    // http://localhost:59039/api/Shoping/DeleteProduct?id=
    this.http.post("http://localhost:59039/api/Shoping/DeleteProduct?id=" + this.id,
      this.products
    ).subscribe(
      it => {
        // SUCCESS: Do something
      },
      error => {
        // ERROR: Do something
      });
  }
  Edit(id) {
    this.id = this.data.id;
    const modal = this.modalCtrl.create("ModaleditproductPage", {
      dataid: id
    });
    modal.present();
  }
}
