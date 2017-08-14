import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../login&Register/login-service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUsers=false;
  userName="a";
  constructor(private route: Router,private loginService :LoginService) {}
  ngOnInit(){
    this.loginService.changes.subscribe(status =>this.isUsers= status);
  }
  onSubmit(value){
    console.log(value);
    this.route.navigate(['search',{searchTerm: value.srch_term}]);

  }
  changeLogin(){
    this.isUsers=!this.isUsers;
    this.route.navigate(["/"]);
  }
}
