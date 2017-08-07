import { NgModule } from '@angular/core';
import { ProductComponent} from './product-component';
import { ProductService} from './product-service';
import { RouterModule , Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path: 'Products' , component : ProductComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes), CommonModule
  ],
  exports: [
    ProductComponent, RouterModule , BrowserModule
  ],
  declarations : [ ProductComponent ],
  providers :  [ProductService ]
})
export class ProductModule {}


