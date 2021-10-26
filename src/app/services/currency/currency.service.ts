import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  private getCurrencyUrl = "/api/currency";
  private deleteCurrencyUrl = "/api/currency/";

  public getCurrencies(){
    return this.httpClient.get(this.getCurrencyUrl);
  }

  public addCurrency(requestBody:any){
    const body = requestBody;
    return this.httpClient.post(this.getCurrencyUrl, body);
  }

  public deleteRegion(id:any) {
    return this.httpClient.delete(this.deleteCurrencyUrl+id, {responseType: 'text'});
  }

}
