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
  getParticularProduct(categoryId) {
    alert("http://localhost:8080/BuyerVsSeller-1.0-SNAPSHOT/BuyervsSeller/"+categoryId );
    var url='http://localhost:8080/BuyerVsSeller-1.0-SNAPSHOT/BuyervsSeller/'+categoryId;
    return this.http.get(url)
      .map((response: Response) => response.json());

  }
  getProductDetails(categoryId,productId){
    alert("http://localhost:8080/BuyerVsSeller-1.0-SNAPSHOT/BuyervsSeller/"+categoryId+"/"+productId );
    var url='http://localhost:8080/BuyerVsSeller-1.0-SNAPSHOT/BuyervsSeller/'+categoryId+"/"+productId;
    return this.http.get(url)
      .map((response: Response) => response.json());

  }
}

