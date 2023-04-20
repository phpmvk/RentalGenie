import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = "http://localhost:3001/";

  constructor(
    private http: HttpClient
  ) { }

  public signOut = () => {
    localStorage.removeItem("token")
  }

  LoginWithGoogle(credentials: string): Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(this.rootUrl + 'agent/login', {credentials}, { headers: header })
  }
}
