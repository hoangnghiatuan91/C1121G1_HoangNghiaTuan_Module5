import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryCreateComponent} from './category-create/category-create.component';


const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: 'edit/:id', component: CategoryEditComponent},
  {path: 'create', component: CategoryCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
