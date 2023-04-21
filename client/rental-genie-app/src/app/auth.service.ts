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


// DEPRECATED BY ME
// public signOut = () => {
//   localStorage.removeItem("token")
// }

// // LoginWithGoogle(credentials: string): Observable<any>{
// //   return this.http.post(this.rootUrl + 'agent/login', {credentials}, { headers: this.header })
// // }

// RegisterWithGoogle(credentials: string): Observable<any>{
//   return this.http.post(this.rootUrl + 'agent/register', {credentials}, { headers: this.header })
// }

// LoginWithGoogle(credentials: string): Observable<any>{
//   return this.http.get(this.rootUrl + "auth/google", { headers: this.header })
// }

// GoogleCallback(parameters: any): Observable<any>{
//     console.log('called google back')
//     let params = new HttpParams();
//     params = params.append('code', parameters.code)
//     const options = { params: params}
//     console.log('called google back2' )
//     return this.http.get<any>(this.rootUrl + 'auth/google/callback', { "headers": {"accept": "application/json" }})
// }