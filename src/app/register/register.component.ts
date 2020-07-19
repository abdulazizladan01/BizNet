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

  constructor(private __auth: AuthService){ 
    this.registerUserData = {
    };
  }

  register(){
    if(this.registerUserData = {}){
      //stop submission on account of emptiness
     console.log("Fields cannot be empty")
    }else if(this.registerUserData.password != this.registerUserData.passwordVerify){
      alert("Passwords don't match")
    }
    else{
      this.__auth.register(this.registerUserData);
    }
  }

  ngOnInit(): void {
  }

}
