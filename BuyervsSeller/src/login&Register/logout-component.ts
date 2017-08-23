import {Component, OnInit} from '@angular/core';
import {LogoutService} from "./logout-service";
import {Router} from '@angular/router';

@Component({

  template: `<h2>you are successfully logged out</h2>
  <button type="button" class="btn btn-info pull-right" (click)="onClick()">
    home
  </button>`,
})
export class LogoutComponent implements OnInit{
  authountication = [];

  constructor(private  logoutservice: LogoutService, private router: Router) {
  }
  ngOnInit () {

    this.logoutservice.authourization()
      .subscribe(data => {
        console.log('### received response : ', data.check);
        if (data.check == true) {
          alert('succussfully logout');
          this.router.navigate(['/Login']);
        } else {

        }
      });

  }
  onClick(){
    this.router.navigate(['/']);

  }
}


