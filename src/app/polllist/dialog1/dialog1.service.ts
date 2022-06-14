import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dialog1Service {

  constructor(private httpClient: HttpClient) { }
  public dialog1(title:string){
    return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/update_poll_title?id=577212fdd1bba33c17b5b64e&title=newtitle`);
  
  }
}
