import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(loginUserData){
    console.log(loginUserData);
  }

  register(){
    console.log("Registering");
  }

  loggedIn(){

  }
  constructor(){ 

  }
}
