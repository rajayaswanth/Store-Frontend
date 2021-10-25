import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  private getCountryUrl = "/api/country";

  public getCountries(){
    return this.httpClient.get(this.getCountryUrl);
  }

}
