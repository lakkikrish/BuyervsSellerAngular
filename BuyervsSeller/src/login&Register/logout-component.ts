import {Component, OnInit} from '@angular/core';
import {LogoutService} from "./logout-service";
import {Router} from '@angular/router';

@Component({

  templateUrl: `./login-component.html`,
})
export class LogoutComponent implements OnInit{
  authountication = [];

  constructor(private  logoutservice: LogoutService, private router: Router) {
  }
  ngOnInit () {

    this.logoutservice.authourization()
      .subscribe(data => {
        console.log('### received response : ', data.check);
        if (data.check === true) {
          alert('succussfully logout');
          this.router.navigate(['/Login']);
        } else {
          alert('please login');
          this.router.navigate(['/']);
        }
      });

  }
  onClick(){
    this.router.navigate(["/Registration"]);
  }

}


