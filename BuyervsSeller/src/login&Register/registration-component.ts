import {Component} from '@angular/core';
import { RegistrationService} from './registration-service';
import { Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  templateUrl : `./registration-component.html`,
})
export class RegistrationComponent {
  UserForm = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    PhoneNo: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern("^[789][0-9]{9}$")]),
    EmailId: new FormControl('',[Validators.required ,Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]),
    Password: new FormControl('',[Validators.required, Validators.pattern("^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{2,}$")]),
    ReenterPassword: new FormControl(),
    Captcha: new FormControl(),

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
    this.registerservice.authourization(this.body)
      .subscribe(data => {
        if (data.flag == true) {
          alert(" successfully registered");
          this.route.navigate(["/Login"]);
        }
        else{
          alert("not registered succefully");

        }
      })
    }
}

