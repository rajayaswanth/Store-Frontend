import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private httpClient: HttpClient) { }

  private getSalesUrl = "/api/sales";

  public getSales(){
    return this.httpClient.get(this.getSalesUrl);
  }

}
