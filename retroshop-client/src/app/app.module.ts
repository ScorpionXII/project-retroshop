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
import { ProductCreateComponent } from '../components/product-create/product-create.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductService } from "../services/product/product.service";
import { FileSelectDirective } from "ng2-file-upload";
import { ProductListComponent } from '../components/product-list/product-list.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { InputSearchPlaceGmapComponent } from '../components/input-search-place-gmap/input-search-place-gmap.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavBarComponent,
    LoginComponent,
    ProductCreateComponent,
    HomeComponent,
    FileSelectDirective,
    ProductListComponent,
    UserProfileComponent,
    InputSearchPlaceGmapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MasonryModule,
    AgmCoreModule.forRoot({ apiKey:'AIzaSyBPeU5zWhjbP16CcsSYSyVuDndGKr6Nn98', libraries:['places']}),
    GooglePlaceModule
  ],
  providers: [ SessionService, ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
