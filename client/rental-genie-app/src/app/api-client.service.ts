import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = "http://localhost:3001/";

  constructor(
    private http: HttpClient
  ) {}
  
  chatMessageSend(msg: Message): Observable<Message>{
    return this.http.post<Message>(this.rootUrl, msg, {  "headers": { "content-type": "application/json" }})
  }


}
