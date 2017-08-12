import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchSevice {
  private _url = 'http://192.168.35.55:8080/buyit/';

  constructor(private http: Http) {
  }

  getProducts(product) {
    alert("http://192.168.35.55:8080/buyit/" + product)
    var _url = 'http://192.168.35.55:8080/buyit/' + product;
    return this.http.get(_url)
      .map((response: Response) => response.json());
  }
}
