import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../login&Register/login-service";
import {Http , Response , Headers} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isUsers;
  userName;
  constructor(private route: Router,private loginService :LoginService ,private _http:Http) {

  }
  ngOnInit(){
    this.loginService.changes.subscribe(status =>this.isUsers= status);
    this.loginService.userName.subscribe(name => this.userName = name);
    const headers = new Headers();
    headers.append ('Content-Type','application/json');
    this._http.get("http://192.168.35.55:8080/buyit/customer/checkSession",{headers: headers ,withCredentials: true })
      .map((response:Response)=>response.json())
      .subscribe(
        data => this.isUsers = data );

  }
  onSubmit(value){
    console.log(value);
    this.route.navigate(['search',{searchTerm: value.srch_term}]);

  }
  changeLogin(){
    this.isUsers=false;
    this.route.navigate(["/Logout"]);
  }
}
