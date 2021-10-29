import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  private getCurrencyUrl = "/api/currency";
  private deleteCurrencyUrl = "/api/currency/";
  headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

  public getCurrencies(){
    this.headers.set("content-type","application/json");
    return this.httpClient.get(this.getCurrencyUrl, { 'headers': this.headers });
  }

  public addCurrency(requestBody:any){
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.post(this.getCurrencyUrl, body, { 'headers': this.headers });
  }

  public updateCurrency(requestBody:any){
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.put(this.getCurrencyUrl, body, { 'headers': this.headers });
  }

  public deleteRegion(id:any) {
    this.headers.set("content-type","application/json");
    return this.httpClient.delete(this.deleteCurrencyUrl+id, { responseType: 'text', 'headers': this.headers });
  }

}
