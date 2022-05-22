import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsListComponent,
    PostsCreateComponent,
    PostsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
