import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private listBusinessesUrl : string;
  private listUsersUrl : string;
  private listArticlesUrl : string;
  private listJobsUrl : string;
  constructor( private _http : HttpClient ){ 
    this.listBusinessesUrl = ".././assets/Businesses.json";
    this.listUsersUrl = ".././assets/Users.json";
    this.listArticlesUrl = ".././assets/Articles.json";
    this.listJobsUrl = ".././assets/Jobs.json";
  }

  showAllBusinesses(){
    return this._http.get<any>(this.listBusinessesUrl);
  }

  showAllUsers(){
    return this._http.get<any>(this.listUsersUrl);
  }

  showAllArticles(){
    return this._http.get<any>(this.listArticlesUrl);
  }

  showAllJobs(){
    return this._http.get<any>(this.listJobsUrl);
  }

  searchBusiness( keywords : string ){

  }

  searchUsers( keywords : string ){

  }

  searchArticles( keyword : string ){

  }

  searchJobs( keywords : string ){

  }
}
