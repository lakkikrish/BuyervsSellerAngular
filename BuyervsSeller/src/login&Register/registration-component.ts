import {Component} from '@angular/core';
import { RegistrationService} from './registration-service';
import { Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  templateUrl : `./registration-component.html`,
})
export class RegistrationComponent {
  UserForm = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
    PhoneNo: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    EmailId: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required]),
    ReenterPassword: new FormControl(),
    Captcha: new FormControl()
  })

  body;

  constructor(private  registerservice: RegistrationService , private route: Router) {
  }

  onSubmit(value) {
    console.log(value);
    this.body = {
    "name": value.Name,
      "mobileno" : value.PhoneNo,
      "email" : value.EmailId,
      "password" : value.Password
    };
    console.log('this is form component');
    this.registerservice.authourization(this.body)
      .subscribe(data => {
        if (value.Name === data.name) {
          alert("successfully registered");
          this.route.navigate(["/"]);
        }
        else{
          alert("not registered succefully");

        }
      })
    }
}
/*ValidateData(uname,pwd){

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


}*/

