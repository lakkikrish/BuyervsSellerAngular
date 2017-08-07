import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegistrationService {
  constructor( private http: Http) {}
  authourization(body) {
    console.log('this is url body');
    return this.http.post("http://localhost:8080/BuyerVsSeller-1.0-SNAPSHOT/BuyervsSeller/Registration",body)
      .map((response: Response) => response.json());
  }
}
