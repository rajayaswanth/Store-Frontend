import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private userUrl = "/api/users";
  headers = new HttpHeaders();

  public addUser(requestBody:any) {
    this.headers.set("content-type","application/json");
    const body = requestBody;
    return this.httpClient.post(this.userUrl+'/add', body, { 'headers': this.headers });
  }

}
