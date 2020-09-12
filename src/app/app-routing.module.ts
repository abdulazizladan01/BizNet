import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuardGuard } from './guest-guard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import  { HomeComponent } from './dashboard/home/home.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
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
    component : DashboardComponent,
    canActivate: [ AuthGuard ],
    children : [
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'messages',
        component : MessagesComponent
      },
      {
        path : 'notifications',
        component : NotificationsComponent
      },
      {
        path : 'profile',
        component : ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
