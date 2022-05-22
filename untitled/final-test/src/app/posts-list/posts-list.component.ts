import {Component, OnInit} from '@angular/core';
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
  postsDelete: Posts;
  number = 0;
  totalPages = 0;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.getAll(this.number, this.areaSearch, this.priceSearch, this.waySearch);
  }

  getAll(page, areaSearch, priceSearch, waySearch) {
    this.postsService.getAll(page, areaSearch, priceSearch, waySearch).subscribe(postsList => {
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
    this.getAll(this.number, this.areaSearch, this.priceSearch, this.waySearch);
  }

  deleteProduct(closeModal: HTMLButtonElement) {
    this.postsService.findPostsById(this.idDelete).subscribe(postsDelete => {
      this.postsDelete = postsDelete;
      this.postsService.deletePosts(this.postsDelete).subscribe(() => {
        closeModal.click();
        this.ngOnInit();
      });
    });
  }
  next() {
    if (this.number < this.totalPages - 1) {
      this.postsService.getAll(this.number + 1, this.areaSearch, this.priceSearch, this.waySearch).subscribe(
        data => {
          // @ts-ignore
          this.postsList = data.content;
          // @ts-ignore
          this.number = data.number;
          console.log(data);
        }, err => console.log(err)
      );
    }
  }
  previous() {
    if (this.number > 0) {
      this.postsService.getAll(this.number - 1, this.areaSearch, this.priceSearch, this.waySearch).subscribe(
        data => {
          // @ts-ignore
          this.postsList = data.content;
          // @ts-ignore
          this.number = data.number;
          console.log(data);
        }, err => console.log(err)
      );
    }
  }
}


