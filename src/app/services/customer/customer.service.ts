import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  private getCustomerUrl = "/api/customer";
  private deleteCustomerUrl = "/api/customer/";
  headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

  public getCustomers(){
    this.headers.set("content-type","application/json");
    return this.httpClient.get(this.getCustomerUrl, { 'headers': this.headers });
  }

  public addCustomer(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.post(this.getCustomerUrl, body, { 'headers': this.headers });
  }

  public updateCustomer(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.put(this.getCustomerUrl, body, { 'headers': this.headers });
  }

  public deleteCustomer(id:any) {
    this.headers.set("content-type","application/json");
    return this.httpClient.delete(this.deleteCustomerUrl+id, {responseType: 'text', 'headers': this.headers });
  }

}
