import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from "@angular/http"
@Injectable()
export class OrderService {
  constructor( private http: Http) {}
  order(body) {
    alert('trying to order');
    const headers = new Headers();
    headers.append('Content-Type',
      'application/json');
    console.log('http object : ',this.http);
    return this.http.post("http://192.168.35.55:8080/buyit/order",body,{ headers: headers, withCredentials: true })
      .map((response: Response) => response.json());
  }
}
