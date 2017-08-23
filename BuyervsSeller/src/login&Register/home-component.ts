
import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  template: `
  <div class="container">
    <h2><i>BuyIt</i></h2>
    <div id="myCarousel" class="carousel slide" data-ride="carousel" >
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner" >
        <div class="item active">
          <img src="assets/homepage/electronics.jpg" alt="Los Angeles" style="width:100%;" value="sports" (click)="onSelect('sports')">
        </div>

        <div class="item">
          <img src="assets/homepage/globalstore.jpg" alt="Chicago" style="width:100%;" value="globalstore" (click)="onSelect('global')">
        </div>

        <div class="item">
          <img src="assets/homepage/kitch&home.jpg" alt="New york" style="width:100%;" value="kitchen" (click)="onSelect('home')">
        </div>

        <div class="item">
          <img src="assets/homepage/mobileTv.jpg" alt="New york" style="width:100%;" value="mobile" (click)="onSelect('mobile')">
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  `

})
export class HomeComponent {
  constructor(private route:Router){}
  imgsources= [
    {'imgAdress' : 'assets/homepage/electronics.jpg'},
    {'imgAdress' : 'assets/homepage/globalstore.jpg'},
    {'imgAdress' : 'assets/homepage/kitch&home.jpg'},
    {'imgAdress' : 'assets/homepage/mobileTv.jpg'}
  ];
onClick(value){
  this.route.navigate(["/"])
}
  onSelect(name){

    this.route.navigate(['search',{searchTerm: name }]);

  }
}


