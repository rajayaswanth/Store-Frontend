import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  private getProductUrl = "/api/product";
  headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

  public getProducts(){
    this.headers.set("content-type","application/json");
    return this.httpClient.get(this.getProductUrl, { 'headers': this.headers });
  }

  public addProduct(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.post(this.getProductUrl, body, { 'headers': this.headers });
  }

  public deleteProduct(id:any) {
    this.headers.set("content-type","application/json");
    return this.httpClient.delete(this.getProductUrl+'/'+id, { responseType: 'text', 'headers': this.headers });
  }

}
