import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public addCountry(requestBody:any) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers };
    const body = requestBody;
    return this.httpClient.post(this.getCountryUrl, body, options);
  }

  public deleteCountry(id:any) {
    return this.httpClient.delete(this.getCountryUrl+'/'+id, {responseType: 'text'});
  }

}
