import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicesListComponent} from './services-list/services-list.component';
import {CreateVillaComponent} from './service-create/create-villa/create-villa.component';
import {CreateHouseComponent} from './service-create/create-house/create-house.component';
import {CreateRoomComponent} from './service-create/create-room/create-room.component';
import {EditVillaComponent} from './service-edit/edit-villa/edit-villa.component';
import {EditHouseComponent} from './service-edit/edit-house/edit-house.component';
import {EditRoomComponent} from './service-edit/edit-room/edit-room.component';


const routes: Routes = [
  {path: '/service-list', component: ServicesListComponent},
  {path: '/service-create/villa', component: CreateVillaComponent},
  {path: '/service-create/house', component: CreateHouseComponent},
  {path: '/service-create/room', component: CreateRoomComponent},
  {path: '/service-list', component: ServicesListComponent},
  {path: '/service-edit/villa', component: EditVillaComponent},
  {path: '/service-edit/house', component: EditHouseComponent},
  {path: '/service-edit/room', component: EditRoomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesComponentRoutingModule { }
