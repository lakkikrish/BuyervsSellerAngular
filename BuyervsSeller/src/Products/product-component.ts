import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from './category-service';

@Component({
  selector:'products',
  templateUrl:'./product-component.html'
})
export class ProductComponent implements OnInit{
  products =[];
  categoryId;
  constructor(private productservice: CategoryService, private route: Router, private router: ActivatedRoute) {}
    ngOnInit(){
      let id = this.router.snapshot.params['id'];
      alert(this.router.snapshot.params['id']);
      this.categoryId = id;
      this.productservice.getParticularProduct(id)
        .subscribe(data => {
          this.products = data;
        });
    }
    onClick(product){
      this.route.navigate(['/Category',this.categoryId,product.productId]);
    }
  }

