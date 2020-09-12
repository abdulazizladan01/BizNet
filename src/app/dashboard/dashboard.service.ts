import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private statsUrl: string;
  constructor(private _http: HttpClient){ 
    this.statsUrl = ".././assets/Dashboard.json";
  };

  public getStats(id : number){
    return this._http.get<any>(this.statsUrl);
  }
}
