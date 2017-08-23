import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({

  template: `<h3>your order is successfully placed</h3>
  <button type="button" class="btn btn-info pull-right" (click)="onClick()">
    home
  </button>
  `
})
export class SuccessComponent {
  constructor(private route: Router) {}
  onClick(){
    this.route.navigate(['/']);

  }

}
