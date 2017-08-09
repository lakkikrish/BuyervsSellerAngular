import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category-service';
import {Router} from "@angular/router";

@Component({
  selector : 'app-product',
  templateUrl: `./category-component.html`
})
export class CategoryComponent implements OnInit{
  products = [];

  constructor(private productservice: CategoryService, private route: Router) {
  }

  ngOnInit() {
    this.productservice.getProducts()
      .subscribe(data => this.products = data);
  }
  onClick(){
    this.route.navigate(['/']);
  }
}
