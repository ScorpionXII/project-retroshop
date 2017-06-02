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
import { FileUploadModule } from "ng2-file-upload";
import { ProductListComponent } from '../components/product-list/product-list.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { InputSearchPlaceGmapComponent } from '../components/input-search-place-gmap/input-search-place-gmap.component';
import { PulserComponent } from '../components/pulser/pulser.component';
import { ProductViewComponent } from '../components/product-view/product-view.component';
import { ModalComponent } from '../components/modal/modal.component';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';
import { ProductService } from "../services/product/product.service";
import { ProductCardsComponent } from '../components/product-cards/product-cards.component';
import { FilterByPipe } from '../pipes/filter-by-name.pipe';
import {NavBarSearchService} from "../services/nav-bar-search/nav-bar-search.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavBarComponent,
    LoginComponent,
    ProductCreateComponent,
    HomeComponent,
    ProductListComponent,
    UserProfileComponent,
    InputSearchPlaceGmapComponent,
    PulserComponent,
    ProductViewComponent,
    ModalComponent,
    ProductEditComponent,
    ProductCardsComponent,
    FilterByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MasonryModule,
    FileUploadModule,
    AgmCoreModule.forRoot({ apiKey:'AIzaSyBPeU5zWhjbP16CcsSYSyVuDndGKr6Nn98', libraries:['places']}),
    GooglePlaceModule
  ],
  providers: [ SessionService, ProductService, NavBarSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
