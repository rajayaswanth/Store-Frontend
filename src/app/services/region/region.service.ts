import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClient: HttpClient) { }

  private getRegionUrl = "/api/region";

  public getRegions(){
    return this.httpClient.get(this.getRegionUrl);
  }

}
