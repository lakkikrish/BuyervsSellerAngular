import { NgModule } from '@angular/core';
import { SearchComponent} from './search-component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SearchSevice} from "./search-sevice";
import { PagenotfoundComponent } from '../login&Register/pagenotfound-component';
const routes: Routes = [
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'pagenotfound', component: PagenotfoundComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes), CommonModule
  ],
  exports: [
    SearchComponent, RouterModule
  ],
  declarations : [ SearchComponent ],
  providers: [SearchSevice]
})
export class SearchModule {}


