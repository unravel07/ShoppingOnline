import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  segment: any;
  constructor(public navCtrl: NavController) {
    this.segment = "shopping";
  }

  product(){
    this.navCtrl.push("ProductmanagementPage");
  }

}
