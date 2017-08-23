import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Http,Response , Headers} from "@angular/http";

@Injectable()
export class AuthGuardService implements CanActivate {

    isvalidUser=false;
    result=false;

  constructor(private router :Router,private _http:Http){};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const headers = new Headers();
      headers.append ('Content-Type','application/json');
      this._http.get("http://192.168.35.55:8080/buyit/customer/checkSession",{headers: headers ,withCredentials: true })
        .map((response:Response)=>response.json())
        .subscribe(
          data => this.isvalidUser = data,
          error=>{},
          ()=>{
            if(this.isvalidUser==true){
              this.result=true;
            }
            else{
              this.router.navigate(['/Login',{makeorder:true}]);
              this.result= false;
            }
          }
        );
      return this.result;
    }


  }



