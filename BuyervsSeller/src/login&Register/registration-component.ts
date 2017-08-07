import {Component} from '@angular/core';
import { RegistrationService} from './registration-service';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  templateUrl : `./registration-component.html`,
})
export class RegistrationComponent {
  UserForm = new FormGroup({
    Name: new FormControl(),
    PhoneNo: new FormControl(),
    EmailId: new FormControl(),
    Password: new FormControl(),
    ReenterPassword: new FormControl(),
    Captcha: new FormControl()
  })

  authountication = [];
  body;
  check;

  constructor(private  registerservice: RegistrationService) {
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
      .subscribe(resformdata => {
        if (this.check === true) {
          console.log("valid user");
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

