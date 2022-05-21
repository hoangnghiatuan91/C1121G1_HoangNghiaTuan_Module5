import {NgModule} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponentModule} from './customer-component/customer-component.module';
import {ContractModule} from './contract-component/contract.module';
import {ServicesComponentModule} from './services-component/services-component.module';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CustomerComponentModule,
    ContractModule,ServicesComponentModule
  ],
  exports: [
    RouterModule
  ], providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ]
})
export class AppRoutingModule {
}
