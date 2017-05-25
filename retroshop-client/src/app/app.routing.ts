import { Routes } from '@angular/router';
import {LoginFormComponent} from "../components/login-form/login-form.component";
import {SignupFormComponent} from "../components/signup-form/signup-form.component";

export const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: '**', redirectTo: '' }
];
