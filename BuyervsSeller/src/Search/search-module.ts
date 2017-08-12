import { NgModule } from '@angular/core';
import { SearchComponent} from './search-component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SearchSevice} from "./search-sevice";
const routes: Routes = [
  {
    path: 'search', component: SearchComponent
  },
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


