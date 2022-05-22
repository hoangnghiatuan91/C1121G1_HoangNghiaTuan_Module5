import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostsCreateComponent} from './posts-create/posts-create.component';
import {PostsEditComponent} from './posts-edit/posts-edit.component';


const routes: Routes = [
  {path: 'posts-list', component: PostsListComponent},
  {path: 'posts/create', component: PostsCreateComponent},
  {path: 'posts/edit/:id', component: PostsEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
