import {NgModule} from '@angular/core';
import {CategoryComponent} from './category-component';
import {CategoryService} from './category-service';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product-component';
import {ProductDetailComponent} from './productDetail-component';

const routes: Routes = [
  {
    path: 'Category', component: CategoryComponent
  },
  {path: 'Category/:id', component: ProductComponent,
  children:[
    {path: ':productId', component: ProductDetailComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), CommonModule
  ],
  exports: [
    CategoryComponent, RouterModule, BrowserModule
  ],
  declarations: [CategoryComponent, ProductComponent , ProductDetailComponent],
  providers: [CategoryService]
})
export class ProductModule {
}


