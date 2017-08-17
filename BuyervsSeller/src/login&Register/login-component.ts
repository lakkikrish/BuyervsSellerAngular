import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login-service';
import {Router} from '@angular/router';

@Component({

  templateUrl: `./login-component.html`,
})
export class LoginComponent {
  LoginForm = new FormGroup({
    EmailId: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required)
  });
  authountication = [];
  body;

  constructor(private  loginservice: LoginService, private router: Router) {
  }

  onSubmit(value) {
    console.log(value);
    this.body = {
      "email": value.EmailId,
      "password": value.Password
    };
    this.loginservice.authourization(this.body)
      .subscribe(data => {
       // console.log('### received response : ', data.check);
        if (data.check === true) {
          this.loginservice.changes.next(true);
          this.loginservice.userId.next(data.custId);
          this.loginservice.userName.next(data.custName);
          alert('succussfully login');
          alert(data.custId);
          console.log("valid user");
          this.router.navigate(['/']);
        } else {
          alert('invalid login');
        }
      });

  }
  onClick(){
    this.router.navigate(["/Registration"]);
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
