import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuardGuard } from './guest-guard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
    canActivate: [ GuestGuardGuard ]
  },
  {
    path : 'register',
    component : RegisterComponent,
    canActivate: [ GuestGuardGuard ]
  },
  {
    path : 'dashboard',
    component : DashboardComponent//,
    //canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
