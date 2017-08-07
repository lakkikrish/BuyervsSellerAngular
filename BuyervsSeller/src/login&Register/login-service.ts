import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  constructor( private http: Http) {}
  authourization(body) {
    alert('You try to login');
    console.log('http object : ',this.http);
    return this.http.post("http://localhost:8080/BuyerVsSeller-1.0-SNAPSHOT/BuyervsSeller/Login",body)
      .map((response: Response) => response.json());
  }
}
