import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD
=======
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
>>>>>>> 01e7892e887649cd323ce33a8d7ee8a960e4cbdd
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage: any = HomePage;
=======
  rootPage:any = HomePage;
>>>>>>> 01e7892e887649cd323ce33a8d7ee8a960e4cbdd

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

