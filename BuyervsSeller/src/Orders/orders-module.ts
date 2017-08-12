import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { OrderComponent} from './order-component';
import { RouterModule , Routes } from '@angular/router';
import {AuthGuardService} from "./authGurd-service";
const routes: Routes = [
  {path: 'PlaceOrder' , canActivate: [AuthGuardService], component : OrderComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),FormsModule ,ReactiveFormsModule
  ],
  exports: [
    OrderComponent, RouterModule
  ],
  declarations : [ OrderComponent ],
  providers : [AuthGuardService]

})


export class OrdersModule {}



