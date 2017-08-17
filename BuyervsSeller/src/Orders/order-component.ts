import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router, Params} from "@angular/router";
import {OrderService} from "./order-service";
import {LoginService} from "../login&Register/login-service";

@Component({
  templateUrl: `./order-component.html`
})
export class OrderComponent implements OnInit {
  OrderForm = new FormGroup({
    address: new FormGroup({
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      zipcode: new FormControl('',Validators.required),
    }),
    payment_type: new FormControl('',Validators.required),
      paymentInfo: new FormGroup({
        card_type: new FormControl(),
        card_No: new FormControl(),
        card_Name: new FormControl(),
        expiry_Date: new FormControl(),
        cvv: new FormControl()
      })

  });
  body;
  productId;
  customerDetails={check:false,
  customerId:0,
  customerName:"a" };
  constructor(private router: ActivatedRoute,
              private orderservice: OrderService ,
              private loginService: LoginService ,
              private route:Router ) {
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      let pdtid = params['pdtId'];
      this.productId=pdtid;
      this.customerDetails= this.loginService.userData();
    })
  }

  onSubmit(value) {
    console.log(value);

    alert('customerId'+this.customerDetails.customerId);
      this.body = {
       "customerId":1,
        "street": value.street,
        "city": value.city,
        "state": value.state,
        "country": value.country,
        "zipcode": value.zipcode,
        "productId": this.productId,
        "cardType": value.card_type,
        "cardNumber": value.card_No,
        "cardName": value.card_Name,
        "date": value.expiry_Date,
        "cvv": value.cvv,
        "paymentType": value.payment_type
      };

    this.orderservice.order(this.body)
      .subscribe(data => {
        if (data.flag === true) {
          alert("successfully place the order");
          this.route.navigate(["/"]);
        }
        else
          alert("your order is rejected, Check once");

      })

    }

}
