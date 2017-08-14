
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
          <img src="assets/homepage/globalstore.jpg" alt="Chicago" style="width:100%;" value="globalstore" (click)="onSelect('globalstore')">
        </div>

        <div class="item">
          <img src="assets/homepage/kitch&home.jpg" alt="New york" style="width:100%;" value="kitchen" (click)="onSelect('home' )">
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


/*
import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';


/!*Angular 2 Carousel - Gallery*!/
@Component({
  selector: 'my-app',
  template:`
                    <h2>Angular 2 Carousel - Gallery</h2>
                    <div class="row">
                      <div class="col-md-12">
                        <carousel [interval]="NextPhotoInterval" [noWrap]="loopSlides">
                          <slide *ngFor="#slidez of slides; #index=index"
                                 [active]="slidez.active">
                            <img [src]="slidez.image" style="margin:auto;">

                            <div class="carousel-caption">
                              <h3 style="background-color: transparent;color: white;">Slide {{index + 1}}</h3>
                              <p  style="background-color: transparent;color: white;">{{slidez.text}}</p>
                            </div>
                          </slide>
                        </carousel>
                      </div>

                      <div class="col-md-12">
                        <button type="button" class="btn btn-info"
                                (click)="removeLastSlide()">Remove Last Slide
                        </button>
                      </div>
                    </div>

             `,
  directives: [Slide,Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES],
})
export class Angular2Carousel  {
  //The time to show the next photo
  private NextPhotoInterval:number = 5000;
  //Looping or not
  private loopSlides:boolean = true;
  //Photos
  private slides:Array<any> = [];

  constructor() {
    this.addNewSlide();
  }

  private addNewSlide() {
    this.slides.push(
      {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg',text:'BMW 1'},
      {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
      {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
      {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
      {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
      {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
    );
  }

  private removeLastSlide() {
    this.slides.pop();
  }
}
*/
