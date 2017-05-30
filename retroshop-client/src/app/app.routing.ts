import { Routes } from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {SignupComponent} from "../components/signup/signup.component";
import {ProductCreateComponent} from "../components/product-create/product-create.component";
import {HomeComponent} from "../components/home/home.component";
import {ProductListComponent} from "../components/product-list/product-list.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'test', component: ProductListComponent},
  { path: '**', redirectTo: '' }
];
