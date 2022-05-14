import { NgModule } from '@angular/core';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractRoutingModule} from './contract-routing.module';
import {CommonModule} from '@angular/common';
import {ContractCreateComponent} from './contract-create/contract-create.component';


@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    ContractRoutingModule,
    CommonModule
  ]
})
export class ContractModule { }
