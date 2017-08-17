import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
@Injectable()
export class CategoryService {
  private _url = 'http://192.168.35.55:8080/buyit/category';
  constructor(private http: Http) {}
  getProducts() {
    return this.http.get(this._url)
      .map((response: Response) => response.json());

  }
  getParticularProduct(categoryId) {
    var url='http://192.168.35.55:8080/buyit/category/'+categoryId;
    return this.http.get(url)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);

  }
  getProductDetails(categoryId,productId){
    var url='http://192.168.35.55:8080/buyit/category/'+categoryId+"/"+productId;
    return this.http.get(url)
      .map((response: Response) => response.json());

  }
  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'json url not found');
  }
}

