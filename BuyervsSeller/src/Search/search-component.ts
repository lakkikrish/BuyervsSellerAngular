import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute, Router , Params} from '@angular/router';
import {Router , Params , ActivatedRoute} from "@angular/router";
import {SearchSevice} from './search-sevice';

@Component({
  selector:'search',
  templateUrl:'../Products/product-component.html'
})
export class SearchComponent implements OnInit {
  products = [];
  productName;

  constructor(private searchservice: SearchSevice, private route: Router, private router: ActivatedRoute) {
  }

  ngOnInit() {

    this.router.params.subscribe((params: Params) => {
      let name = params['searchTerm'];
      this.productName = name;
      this.searchservice.getProducts(name)
        .subscribe(data => {
          this.products = data;
          console.log(data);
          if(this.products.length == 0){
            this.route.navigate(['/pagenotfound']);
          }
        })

    })
  }
  onClick(product){
    this.route.navigate(['/Category',product.categoryId,product.productId]);
  }
  onPrevious(product) {
    this.route.navigate(['/Category']);
  }
}

