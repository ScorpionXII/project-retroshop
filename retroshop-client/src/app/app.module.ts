import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { SessionService } from '../services/session/session.service';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { SignupComponent } from '../components/signup/signup.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { LoginComponent } from '../components/login/login.component';
import { ProductComponent } from '../components/product/product.component';
import { HomeComponent } from '../components/home/home.component';
import {ProductService} from "../services/product/product.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavBarComponent,
    LoginComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MasonryModule
  ],
  providers: [ SessionService, ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
