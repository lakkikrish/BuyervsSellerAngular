import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { OrderComponent} from './order-component';
import { RouterModule , Routes } from '@angular/router';
import {AuthGuardService} from "./authGurd-service";
import {OrderService} from "./order-service";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'PlaceOrder' , canActivate: [AuthGuardService], component : OrderComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),FormsModule ,ReactiveFormsModule, CommonModule
  ],
  exports: [
    OrderComponent, RouterModule
  ],
  declarations : [ OrderComponent ],
  providers : [AuthGuardService ,OrderService]

})


export class OrdersModule {}



