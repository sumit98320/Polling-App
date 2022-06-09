import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreatepollComponent } from './createpoll/createpoll.component';


const routes: Routes = [
  { path : '', redirectTo: 'login', pathMatch: 'full'},
  { path : 'login', component : LoginComponent},
  { path : 'signup',component : SignupComponent},
  { path : 'createpoll', component : CreatepollComponent},
  { path : 'dashboard', component : DashboardComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
