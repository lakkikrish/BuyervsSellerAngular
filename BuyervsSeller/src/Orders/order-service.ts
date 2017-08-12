import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  constructor( private http: Http) {}
  authourization(body) {
    alert('You try to login');
    console.log('http object : ',this.http);
    return this.http.post("http://192.168.35.55:8080/buyit/login",body)
      .map((response: Response) => response.json());
  }
}
