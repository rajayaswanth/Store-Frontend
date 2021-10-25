import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  private getCurrencyUrl = "/api/currency";

  public getCurrencies(){
    return this.httpClient.get(this.getCurrencyUrl);
  }

}
