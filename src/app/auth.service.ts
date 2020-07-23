import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl : string =  "http://localhost:8000/oauth/token";
  apiUrl :string = "http://localhost:8000/api";
  options : any;

  constructor(private _http: HttpClient, private _route : Router){ 
    this.options = {
      headers : new HttpHeaders({
        Accept : 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      })
    };
  }

  /* 
    Get an access token
    @param loginUserData The user emamil and password
  */

  login(loginUserData){
    //console.log(loginUserData);
    //this._route.navigateByUrl('dashboard');
    return this._http.post(this.authUrl, {
      grant_type : 'password',
      client_id : '2',
      client_secret : 'CE03AkqtZRLz4YMPTKm2Gm6enLZm5Yhc577IhKrJ',
      username : loginUserData.email,
      password : loginUserData.password,
      scope : ''
    }, this.options);
  }
  /**
   * Revoke the authenticated user token
   */

  logout() {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    return this._http.get(this.apiUrl + '/token/revoke', this.options);
  }

  register(registerUserData){
    console.log(registerUserData);
  }

  loggedIn(){

  }
  
}
