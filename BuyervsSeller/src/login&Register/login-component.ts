import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login-service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({

  templateUrl: `./login-component.html`,
})
export class LoginComponent {
  LoginForm = new FormGroup({
    EmailId: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });
  body;
  check: boolean;

  constructor(private  loginservice: LoginService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  onSubmit(value) {
    console.log(value);
    this.body = {
      'email': value.EmailId,
      'password': value.Password
    };
    this.loginservice.authourization(this.body)
      .subscribe(data => {
        if (data.check === true) {
          this.loginservice.changes.next(true);
          this.loginservice.userId.next(data.custId);
          this.loginservice.userName.next(data.custName);
          this.check = data.check;
          console.log('valid user');
          let order = this.route.snapshot.params['makeorder'];
          if (order == true) {
            this.router.navigate(['/PlaceOrder']);
          }
          else {
            this.router.navigate(['/']);
          }
        } else {
          alert('invalid login');
        }
      });
  }

  onClick() {
    this.router.navigate(['/Registration']);
  }

}

