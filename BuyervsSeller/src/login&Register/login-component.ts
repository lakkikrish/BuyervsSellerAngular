import {Component} from '@angular/core';
import {FormControl, FormGroup , Validators} from '@angular/forms';
import {LoginService} from './login-service';
import {Router} from '@angular/router';

@Component({

  templateUrl: `./login-component.html`,
})
export class LoginComponent {
  LoginForm = new FormGroup({
    EmailId: new FormControl(),
    Password: new FormControl()
  });
  authountication = [];
  body;
  check;
  buyer;
  constructor(private  loginservice: LoginService ,private router: Router) {}

  onSubmit(value) {
    console.log(value);
    this.body = {
      "email": value.EmailId,
      "password": value.Password
    };
    console.log('this is login component');
    this.loginservice.authourization(this.body)
      .subscribe(resformdata => {
        console.log('### received response : ',resformdata)
        if (resformdata === true) {
          alert('succussfully login');
          console.log("valid user");
          this.router.navigate(['/']);
        }else {alert('invalid login');}
      });

  }
}

/*
ValidateData(uname,pwd){

  console.log("Working"+uname+pwd);
  /!*this._user.ValidateUserData(uname,pwd)
  .subscribe(resEmployeeData=>this.postedData=JSON.stringify(resEmployeeData),
  resEmployeeError=>this.postError=resEmployeeError);*!/

  this._user.ValidateUserData(uname,pwd)
    .subscribe(data => {
        if ( data.isValid === true) {
          this.router.navigate(['/home']);
        }
      },
      dataError => this.postError = dataError);


}
*/
