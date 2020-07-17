import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData;

  constructor(){ 
    this.registerUserData = {
      "firstname" : "",
      "lastName" : "",
      "email" : "",
      "password" : "",
      "passwordVerify" : ""
    };
  }

  register(){

  }

  ngOnInit(): void {
  }

}
