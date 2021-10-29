import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  private getCountryUrl = "/api/country";
  headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

  public getCountries(){
    this.headers.set("content-type","application/json");
    return this.httpClient.get(this.getCountryUrl, { 'headers': this.headers });
  }

  public addCountry(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.post(this.getCountryUrl, body, { 'headers': this.headers });
  }

  public updateCountry(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.put(this.getCountryUrl, body, { 'headers': this.headers });
  }

  public deleteCountry(id:any) {
    this.headers.set("content-type","application/json");
    return this.httpClient.delete(this.getCountryUrl+'/'+id, {responseType: 'text', headers: this.headers});
  }

}
