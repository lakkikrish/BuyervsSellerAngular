import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponents, LoginModule} from '../login&Register/login-module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { OrdersModule} from '../Orders/orders-module';
import { SearchModule} from '../Search/search-module';
import { ProductModule } from '../Products/product-module';

@NgModule({
  declarations: [
    AppComponent , LoginComponents
  ],
  imports: [
    BrowserModule ,
    LoginModule ,
    ReactiveFormsModule ,
    FormsModule,
    HttpModule ,
    OrdersModule ,
    SearchModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
