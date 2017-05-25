import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SessionService } from '../services/session.service';
import { SignupFormComponent } from '../components/signup-form/signup-form.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NavBarComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ SessionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
