import { Component, OnInit } from '@angular/core';
import { BusinessComponent } from './business/business.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  businesses;
  users;
  jobs;
  articles;
  constructor(private _homeService : HomeService){
    this._homeService.showAllBusinesses().subscribe(
      res => {
        this.businesses = res.businesses
      },
      err => {
        console.log("Can't find resources")
      }
    )

    this._homeService.showAllUsers().subscribe(
      res => {
        this.users = res.users
      },
      err => {
        console.log("Can't find resources")
      }
    )

    this._homeService.showAllArticles().subscribe(
      res => {
        this.articles = res.articles;
      },
      err => {
        console.log("Can't find resource");
      }
    )

    this._homeService.showAllJobs().subscribe(
      res => {
        this.jobs = res.jobs;
      },
      err => {
        console.log("Can't find resource")
      }
    )
   }

  ngOnInit(): void {
  }

}
