import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { OrderComponent} from './order-component';
import { RouterModule , Routes } from '@angular/router';
const routes: Routes = [
  {path: 'PlaceOrder' , component : OrderComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    OrderComponent, RouterModule
  ],
  declarations : [ OrderComponent ],

})


export class OrdersModule {}


