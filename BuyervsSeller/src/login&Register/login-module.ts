import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home-component';
import { PagenotfoundComponent } from './pagenotfound-component';
import { LoginComponent } from './login-component';
import { RegistrationComponent } from './registration-component';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './registration-service';
import {LoginService} from './login-service';
import {LogoutComponent} from "./logout-component";
import {LogoutService} from "./logout-service";
const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'Login' , component : LoginComponent},
  {path: 'Registration' , component : RegistrationComponent},
  {path: 'Logout' , component : LogoutComponent},
];

@NgModule({


  imports: [
    RouterModule.forRoot(routes), FormsModule , ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers : [RegistrationService , LoginService , LogoutService]
})
export class LoginModule { }
export const LoginComponents = [HomeComponent , PagenotfoundComponent, LoginComponent ,LogoutComponent , RegistrationComponent ];


