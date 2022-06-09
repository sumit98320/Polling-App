import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private httpClient: HttpClient) { }
  public userlist(){
  return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/list_users`);

}
}
