import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class LoginService {
  private userDetails: {
    check: boolean,
    customerId: number,
    customerName: string

  };


  constructor(private http: Http) {
  }

  changes: BehaviorSubject<any> = new BehaviorSubject(false);
  userId: BehaviorSubject<any> = new BehaviorSubject(1);
  userName: BehaviorSubject<any> = new BehaviorSubject("a");

  authourization(body) {
    alert('You try to login');
    console.log('http object : ', this.http);
    const headers = new Headers();
    headers.append('Content-Type',
      'application/json');
    return this.http.post("http://192.168.35.55:8080/buyit/customer/login",body, {
      headers: headers,
      withCredentials: true
    })
      .map((response: Response) => this.userDetails = response.json());
  }

  userData() {
    return this.userDetails;
  }
}
