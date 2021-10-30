import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private httpClient: HttpClient) { }

  private getSalesUrl = "/api/sales";
  headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

  public getSales(){
    this.headers.set("content-type","application/json");
    return this.httpClient.get(this.getSalesUrl, { 'headers': this.headers });
  }

  public addSales(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.post(this.getSalesUrl, body, { 'headers': this.headers });
  }

  public updateSales(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.put(this.getSalesUrl, body, { 'headers': this.headers });
  }

  public deleteSales(id:any) {
    this.headers.set("content-type","application/json");
    return this.httpClient.delete(this.getSalesUrl+'/'+id, { responseType: 'text', 'headers': this.headers });
  }

}
