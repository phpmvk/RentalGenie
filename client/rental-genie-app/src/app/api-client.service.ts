import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = "http://localhost:3001/";

  //add type!!
  allListings: any = []

  constructor(
    private http: HttpClient
  ) {}
  
  getAllListings(): Observable<any>{  
    return this.http.get<any>(this.rootUrl + 'all-listings', { "headers": {"accept": "application/json" }})
  }

  getListingById(id:any): Observable<any>{
    return this.http.get<any>(this.rootUrl + 'listing/' + id, { "headers": {"accept": "application/json" }})
  }
  
  getAllListingsById(id: any){
    return this.http.get<any>(this.rootUrl + 'all-listings' + `/${id}`, { "headers": {"accept": "application/json" }})
  }

  chatMessageSend(msg: Message[], listingId: string): Observable<string>{
    return this.http.post<string>(this.rootUrl + 'userMessage/' + listingId, msg, {  "headers": { "content-type": "application/json" }})
  }

  // REMEMBER TO FIX TYPE FOR THIS:
  postNewListing(listing: any): Observable<any>{
    return this.http.post<any>(this.rootUrl + 'add-listing', listing, {  "headers": { "content-type": "application/json" }})
  }
}
