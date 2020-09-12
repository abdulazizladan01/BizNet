import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  notifications : number;
  messages : number;
  constructor( private _auth : AuthService, private _router : Router, private _dashboard_service : DashboardService){ 
    this._dashboard_service.getStats(1).subscribe(
      res => {
        console.log(res);
        this.notifications = res.stat.notifications;
        this.messages = res.stat.messages;
      },
      err => {
        console.log("Stats not found");
      }
    );
  }

  ngOnInit(): void{
    
  }

  public logout(): void{
    this._auth.logout()
    this._router.navigateByUrl('');
  }

}
