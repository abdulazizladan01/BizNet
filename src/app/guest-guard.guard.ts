import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardGuard implements CanActivate {

  constructor(private _router : Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ){
      if(!localStorage.getItem('access_token')){
        return true;
      }
    this._router.navigateByUrl('/');
    return false;
  }
  
}
