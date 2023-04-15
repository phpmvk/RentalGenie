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

  // REMEMBER TO FIX TYPE FOR THIS:
  postNewListing(listing: any): Observable<any>{
    return this.http.post<any>(this.rootUrl + 'add-listing', listing, {  "headers": { "content-type": "application/json" }})
  }

  getAllListings(){
    return this.http.get<any>(this.rootUrl + 'all-listings', { "headers": {"accept": "application/json" }})
  }

  getAllListingsById(id: any){
    return this.http.get<any>(this.rootUrl + 'all-listings' + `/${id}`, { "headers": {"accept": "application/json" }})
  }

}
