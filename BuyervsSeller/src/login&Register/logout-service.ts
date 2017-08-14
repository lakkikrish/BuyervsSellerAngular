import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()
export class LogoutService {


  constructor(private http: Http) {
  }

  changes: BehaviorSubject<any> = new BehaviorSubject(false);

  result;
  authourization() {
    alert('You try to logout');
    return this.http.get("http://192.168.35.55:8080/buyit/customer/logout", {withCredentials: true})
      .map((response: Response) =>response.json());
  }
}