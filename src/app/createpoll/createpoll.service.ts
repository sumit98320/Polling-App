import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CreatepollService {
  

  constructor(private httpClient: HttpClient) { }
  public createpoll(que:string,opt1:string,opt2:string,opt3:string,opt4:string,){
    return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/add_poll?title=${que}&options=${opt1}____${opt2}____${opt3}____${opt4}`);
    
  }
}
