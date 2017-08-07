import {Component, OnInit} from '@angular/core';
import {ProductService} from './product-service';

@Component({
  selector : 'app-product',
  template: `<h2>Products</h2>
    <div *ngFor = "let product of products" >{{product.productName }}</div>
  `
})
export class ProductComponent implements OnInit{
  products = [];

  constructor(private productservice: ProductService) {
  }

  ngOnInit() {
    this.productservice.getProducts()
      .subscribe(data => this.products = data);
  }
}
