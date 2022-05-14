import {NgModule} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContractListComponent} from './contract-component/contract-list/contract-list.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  }, {
    path: 'contract-list', component: ContractListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ], providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ]
})
export class AppRoutingModule {
}
