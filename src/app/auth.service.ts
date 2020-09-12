import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Online Urls
  //private loginUrl : string =  "./api/index.php/api/login";
  //private registerUrl :string = "./api/index.php/api/register";

  //Offline Urls
  private loginUrl : string =  "http://127.0.0.1:80/BizNet/api/index.php/api/login";
  private registerUrl : string =  "http://127.0.0.1:80/BizNet/api/index.php/api/register";

  constructor(private _http: HttpClient, private _route : Router){
     
  }

  /* 
    Get an access token
    @param loginUserData The user emamil and password
  */

  login(loginUserData){
    return this._http.post<any>(this.loginUrl, loginUserData);
  }
  /**
   * Revoke the authenticated user token
   */

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  }

  register(registerUserData){
    return this._http.post<any>(this.registerUrl, registerUserData);
  }

  loggedIn(){

  }
  
}
