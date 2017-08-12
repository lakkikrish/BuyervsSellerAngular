import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from './category-service';

@Component({
  selector:'products',
  templateUrl:`./productDetail-component.html`
})
export class ProductDetailComponent implements OnInit{
  products= [];
  productid;
  constructor(private productservice: CategoryService, private route: Router, private router: ActivatedRoute) {}
  ngOnInit(){
    let id = this.router.snapshot.params['id'];
    let productId=this.router.snapshot.params['productId'];
    this.productid = productId;
    this.productservice.getProductDetails(id,productId)
      .subscribe(data => {
        this.products = data;
      });
  }
  onPrevious(product){
    this.route.navigate(['/Category',product.categoryId]);
  }
  onOrder(product){
    this.route.navigate(['/PlaceOrder',{pdtId: product.productId}]);

  }
}

