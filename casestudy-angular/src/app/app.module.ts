import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ServicesListComponent } from './services-component/services-list/services-list.component';
import { CreateVillaComponent } from './services-component/service-create/create-villa/create-villa.component';
import { CreateHouseComponent } from './services-component/service-create/create-house/create-house.component';
import { CreateRoomComponent } from './services-component/service-create/create-room/create-room.component';
import { EditVillaComponent } from './services-component/service-edit/edit-villa/edit-villa.component';
import { EditHouseComponent } from './services-component/service-edit/edit-house/edit-house.component';
import { EditRoomComponent } from './services-component/service-edit/edit-room/edit-room.component';
import { CustomerListComponent } from './customer-component/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-component/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-component/customer-edit/customer-edit.component';
import {ContractListComponent} from './contract-component/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-component/contract-create/contract-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesListComponent,
    CreateVillaComponent,
    CreateHouseComponent,
    CreateRoomComponent,
    EditVillaComponent,
    EditHouseComponent,
    EditRoomComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
