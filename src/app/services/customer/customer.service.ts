import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  private getCustomerUrl = "/api/customer";
  private deleteCustomerUrl = "/api/customer/";

  public getCustomers(){
    return this.httpClient.get(this.getCustomerUrl);
  }

  public addCustomer(requestBody:any) {
    const body = requestBody;
    return this.httpClient.post(this.getCustomerUrl, body);
  }

  public deleteCustomer(id:any) {
    return this.httpClient.delete(this.deleteCustomerUrl+id, {responseType: 'text'});
  }

}
