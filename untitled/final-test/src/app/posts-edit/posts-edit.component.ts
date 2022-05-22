import {Component, OnInit} from '@angular/core';
import {PostsService} from '../service/posts.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../model/category';
import {Province} from '../model/province';
import {Direction} from '../model/direction';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {
  categoryList: Category[] = [];
  provinceList: Province[] = [];
  directionList: Direction[] = [];
  postsEditForm: FormGroup;
  id: number;

  compareDirection(o1: Direction, o2: Direction): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  compareProvince(o1: Province, o2: Province): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  compareCategory(o1: Category, o2: Category): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }


  constructor(private postsService: PostsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getPosts(this.id);
    });
  }

  getPosts(id: number) {
    return this.postsService.findPostsById(id).subscribe(posts => {
      console.log(posts);
      console.log('haha');
      this.postsEditForm = new FormGroup(
        {
          id: new FormControl(posts.id),
          category: new FormControl(posts.category),
          province: new FormControl(posts.province),
          seller: new FormControl(posts.seller),
          typeOfPost: new FormControl(posts.typeOfPost),
          condition: new FormControl(posts.condition),
          address: new FormControl(posts.address, Validators.required),
          // area: new FormControl('', [Validators.required, Validators.pattern('^[2-9]\\d{1}.?\\d{1,}$')]),
          area: new FormControl(posts.area, [Validators.required, Validators.min(20)]),
          direction: new FormControl(posts.direction),
          title: new FormControl(posts.title, Validators.required),
          content: new FormControl(posts.content, Validators.required),
          price: new FormControl(posts.price, [Validators.required, Validators.min(100000000)]),
          startDate: new FormControl(posts.startDate, [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
          status: new FormControl(posts.status, [Validators.required]),
          deleteFlag: new FormControl(false)
        });
    });
  }

  ngOnInit(): void {
    this.getCategoryList();
    this.getProvinceList();
    this.getDirectionList();
  }

  updatePosts() {
    const posts = this.postsEditForm.value;
    console.log(posts);
    console.log('hihi');
    if (this.postsEditForm.valid) {
      this.postsService.updatePosts(posts).subscribe(() => {
        this.router.navigate(['/posts-list']);
      }, error => {
        console.log(error);
      });
    }
  }

  getCategoryList() {
    return this.postsService.getCategoryList().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }

  getProvinceList() {
    return this.postsService.getProvinceList().subscribe(provinceList => {
      this.provinceList = provinceList;
    });
  }

  getDirectionList() {
    return this.postsService.getDirectionList().subscribe(directionList => {
      this.directionList = directionList;
    });
  }

  get address() {
    return this.postsEditForm.get('address');
  }

  get area() {
    return this.postsEditForm.get('area');
  }

  get title() {
    return this.postsEditForm.get('title');
  }

  get content() {
    return this.postsEditForm.get('content');
  }

  get price() {
    return this.postsEditForm.get('price');
  }

  get startDate() {
    return this.postsEditForm.get('startDate');
  }

  get status() {
    return this.postsEditForm.get('status');
  }

}
