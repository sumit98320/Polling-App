import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PolllistComponent } from './polllist/polllist.component';
import { MaterialModule } from './material/material/material.module';
import { Dialog1Component } from './polllist/dialog1/dialog1.component';
import { Dialog2Component } from './polllist/dialog2/dialog2.component';
import { Dialog3Component } from './polllist/dialog3/dialog3.component';
import { Dialog4Component } from './polllist/dialog4/dialog4.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    CreatepollComponent,
    UserlistComponent,
    PolllistComponent,
    Dialog1Component,
    Dialog2Component,
    Dialog3Component,
    Dialog4Component,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
