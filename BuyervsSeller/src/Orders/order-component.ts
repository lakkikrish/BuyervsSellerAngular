import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  templateUrl: `./order-component.html`
})
export class OrderComponent implements OnInit
{
  UserForm = new FormGroup({

    address: new FormGroup({
    street: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    zipcode: new FormControl(),
    }),
    payment: new FormGroup({
      card_type: new FormControl(),
      card_No: new FormControl()
    })
  });
  constructor(private router:ActivatedRoute, private params: Params){}
  ngOnInit() {

    this.router.params.subscribe((params: Params) => {
      let pdtid = params['pdtId'];
    })
  }
  onSubmit(value){
    console.log(value);
  }
}
