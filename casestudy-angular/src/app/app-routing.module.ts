import {NgModule} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContractListComponent} from './contract-component/contract-list/contract-list.component';
import {CustomerListComponent} from './customer-component/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-component/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-component/customer-edit/customer-edit.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  }, {
    path: 'contract-list', component: ContractListComponent
  },
  {
    path: 'customer-list', component: CustomerListComponent
  },
  {
    path: 'customer-create', component: CustomerCreateComponent
  },
  {
    path: 'customer/edit/:id', component: CustomerEditComponent
  },
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
