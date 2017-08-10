import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from './category-service';

@Component({
  selector:'products',
  template:'<h2>productDetails<h2>'
})
export class ProductDetailComponent implements OnInit{
  products =[];
  productid;
  constructor(private productservice: CategoryService, private route: Router, private router: ActivatedRoute) {}
  ngOnInit(){
    let id = this.router.snapshot.params['id'];
    alert(this.router.snapshot.params['id']);
    this.productid = id;
    this.productservice.getProductDetails(id)
      .subscribe(data => {
        this.products = data;
      });
  }
  onClick(product){
    this.route.navigate(['/']);
  }
}

