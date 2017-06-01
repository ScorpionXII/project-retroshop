import { Routes } from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {SignupComponent} from "../components/signup/signup.component";
import {ProductCreateComponent} from "../components/product-create/product-create.component";
import {HomeComponent} from "../components/home/home.component";
import {ProductListComponent} from "../components/product-list/product-list.component";
import {UserProfileComponent} from "../components/user-profile/user-profile.component";
import {ProductViewComponent} from "../components/product-view/product-view.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'profile/view/:id', component: UserProfileComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/view/:id', component: ProductViewComponent },
  { path: '**', redirectTo: '' }
];
