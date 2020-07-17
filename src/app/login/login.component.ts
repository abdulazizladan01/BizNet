import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData;
  
  emailErrorMessage:string;
  passwordErrorMessage:string;

  login(){
    if(this.loginUserData.email == ""){
      this.emailErrorMessage = "email field cannot be empty";
    }else if(this.loginUserData.password == ""){
      this.passwordErrorMessage = "password field cannot be empty";
      }else{
        this.emailErrorMessage = "";
        this.passwordErrorMessage = "";
        this._auth.login(this.loginUserData);
    }
  }

  constructor(private _auth : AuthService) {
    this.loginUserData = {
      "email" : "",
      "password" : ""
    };
  }
  ngOnInit(): void{

  }

}
