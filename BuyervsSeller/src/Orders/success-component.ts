import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({

  template: `<h3>your order is successfully placed</h3>`
})
export class SuccessComponent {
  isUsers=false;
  userName="a";
  constructor(private route: Router) {}

  onSubmit(value){
    console.log(value);
    this.route.navigate(['search',{searchTerm: value.srch_term}]);

  }
  changeLogin(){
    this.isUsers=!this.isUsers;
    this.route.navigate(["/"]);
  }
}
