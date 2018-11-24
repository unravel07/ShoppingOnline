import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductmanagementPage } from './productmanagement';

@NgModule({
  declarations: [
    ProductmanagementPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductmanagementPage),
  ],
})
export class ProductmanagementPageModule {}
