import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from "@angular/http";
@Injectable()
export class RegistrationService {
  constructor( private http: Http) {}
  authourization(body) {
    console.log('this is url body');
    const headers = new Headers();
    headers.append('Content-Type',
      'application/json');
    return this.http.post("http://192.168.35.55:8080/buyit/customer/registration",body , { headers: headers, withCredentials: true })
      .map((response: Response) => response.json());
  }
}
