import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category-service';
import {Router , Params , ActivatedRoute} from "@angular/router";

@Component({
  selector : 'app-product',
  templateUrl: `./category-component.html`
})
export class CategoryComponent implements OnInit{
  products = [];
  example=[{'id':1},{'id':2},{'id':3},{'id':4},{'id':5}];
  public selectproduct;
  constructor(private productservice: CategoryService, private route: Router, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.productservice.getProducts()
      .subscribe(data => this.products = data);
    this.router.params.subscribe((params: Params) =>{
      let id=(params['id']);
      this.selectproduct=id;
    })
  }
  onClick(product){
    alert(product.productId);
    this.route.navigate(['/Category',product.productId]);
  }
}
