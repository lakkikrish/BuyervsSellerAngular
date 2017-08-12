import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegistrationService {
  constructor( private http: Http) {}
  authourization(body) {
    console.log('this is url body');
    return this.http.post("http://192.168.35.55:8080/buyit//registration",body)
      .map((response: Response) => response.json());
  }
}
