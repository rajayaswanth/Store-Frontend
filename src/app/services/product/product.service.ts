import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  private getProductUrl = "/api/product";

  public getProducts(){
    return this.httpClient.get(this.getProductUrl);
  }

  public addProduct(requestBody:any) {
    const body = requestBody;
    return this.httpClient.post(this.getProductUrl, body);
  }

  public deleteProduct(id:any) {
    return this.httpClient.delete(this.getProductUrl+'/'+id, {responseType: 'text'});
  }

}
