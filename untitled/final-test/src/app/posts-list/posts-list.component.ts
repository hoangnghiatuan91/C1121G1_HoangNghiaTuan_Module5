import { Component, OnInit } from '@angular/core';
import {PostsService} from '../service/posts.service';
import {Posts} from '../model/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Posts[] = [];
  areaSearch = 0.0;
  priceSearch = 0.0;
  waySearch = '';
  nameDelete: any;
  idDelete: any;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getAll(this.areaSearch, this.priceSearch, this.waySearch);
  }
  getAll(areaSearch, priceSearch, waySearch) {
    this.postsService.getAll(areaSearch, priceSearch, waySearch).subscribe(postsList => {
      // @ts-ignore
      this.postsList = postsList.content;
      console.log(postsList);
    });
  }
  updateDeleteName(name: any, id: any) {
    this.nameDelete = name;
    this.idDelete = id;
  }

  searchMultiField() {
    this.getAll(this.areaSearch, this.priceSearch, this.waySearch);
  }
}
