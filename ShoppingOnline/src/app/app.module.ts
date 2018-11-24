import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
<<<<<<< HEAD
import { ShowsUpDataComponent } from '../components/shows-up-data/shows-up-data';

=======
import { HttpClientModule } from '@angular/common/http'
>>>>>>> 01e7892e887649cd323ce33a8d7ee8a960e4cbdd
@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ProductDetailPage,
    ShowsUpDataComponent
=======
    CartPage,
    ProductDetailPage
>>>>>>> 01e7892e887649cd323ce33a8d7ee8a960e4cbdd
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ProductDetailPage,
    ShowsUpDataComponent
=======
    CartPage,
    ProductDetailPage
>>>>>>> 01e7892e887649cd323ce33a8d7ee8a960e4cbdd
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
