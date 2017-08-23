import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Headers} from "@angular/http";

@Injectable()
export class OrderService {
  constructor(private http: Http) {
  }

  order(body) {
    const headers = new Headers();
    headers.append('Content-Type',
      'application/json');

    return this.http.post("http://192.168.35.55:8080/buyit/order", body, {headers: headers, withCredentials: true})
      .map((response: Response) => response.json())
      .catch(this._errorHandler);

  }

  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'json url not found');
  }
}
