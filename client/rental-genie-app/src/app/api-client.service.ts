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
  
  chatMessageSend(msg: Message): Observable<string>{
    return this.http.post<string>(this.rootUrl + 'userMessage', msg, {  "headers": { "content-type": "application/json" }})
  }
}
