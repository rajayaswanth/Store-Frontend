import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClient: HttpClient) { }

  private getRegionUrl = "/api/region";
  private deleteRegionUrl = "/api/region/";

  public getRegions(){
    return this.httpClient.get(this.getRegionUrl);
  }

  public addRegion(requestBody:any) {
    const body = requestBody;
    return this.httpClient.post(this.getRegionUrl, body);
  }

  public deleteRegion(id:any) {
    return this.httpClient.delete(this.deleteRegionUrl+id, {responseType: 'text'});
  }

}
