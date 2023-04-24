import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = "http://localhost:3001/";
  header = new HttpHeaders().set('Content-type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }


}