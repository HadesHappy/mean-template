import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  register(body:any) {
    return this._http.post(environment.apiURL+'/api/users/register', body, {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body:any) {
    return this._http.post(environment.apiURL+'/api/users/login', body, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  // Only works if logged in
  user() {
    return this._http.get(environment.apiURL+'/api/users/user', {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  logout() {
    return this._http.get(environment.apiURL+'/api/users/logout', {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}