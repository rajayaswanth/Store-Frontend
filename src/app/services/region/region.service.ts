import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClient: HttpClient) { }

  private getRegionUrl = "/api/region";
  private deleteRegionUrl = "/api/region/";
  headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));

  public getRegions(){
    this.headers.set("content-type","application/json");
    return this.httpClient.get(this.getRegionUrl, { 'headers': this.headers });
  }

  public addRegion(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.post(this.getRegionUrl, body, { 'headers': this.headers });
  }

  public deleteRegion(id:any) {
    this.headers.set("content-type","application/json");
    return this.httpClient.delete(this.deleteRegionUrl+id, { responseType: 'text', 'headers': this.headers });
  }

}
