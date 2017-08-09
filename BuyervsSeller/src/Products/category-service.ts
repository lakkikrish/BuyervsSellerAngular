import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CategoryService {
  private _url = 'http://localhost:8080/BuyerVsSeller-1.0-SNAPSHOT/BuyervsSeller/Category';
  constructor(private http: Http) {}
  getProducts() {
    return this.http.get(this._url)
      .map((response: Response) => response.json());

  }
}

