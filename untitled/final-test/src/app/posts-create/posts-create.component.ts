import {Component, OnInit} from '@angular/core';
import {PostsService} from '../service/posts.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../model/category';
import {Province} from '../model/province';
import {Direction} from '../model/direction';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {
  categoryList: Category[] = [];
  provinceList: Province[] = [];
  directionList: Direction[] = [];

  constructor(private postsService: PostsService) {
  }

  postsCreateForm: FormGroup = new FormGroup(
    {
      category: new FormControl(''),
      province: new FormControl(''),
      seller: new FormControl(),
      typeOfPost: new FormControl(),
      condition: new FormControl(),
      address: new FormControl('', Validators.required),
      // area: new FormControl('', [Validators.required, Validators.pattern('^[2-9]\\d{1}.?\\d{1,}$')]),
      area: new FormControl('', [Validators.required, Validators.min(20)]),
      direction: new FormControl(''),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(100000000)]),
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
      status: new FormControl('', [Validators.required]),
      deleteFlag: new FormControl()
    });

  ngOnInit(): void {
    this.getCategoryList();
    this.getProvinceList();
    this.getDirectionList();
  }

  get address() {
    return this.postsCreateForm.get('address');
  }

  get area() {
    return this.postsCreateForm.get('area');
  }

  get title() {
    return this.postsCreateForm.get('title');
  }

  get content() {
    return this.postsCreateForm.get('content');
  }

  get price() {
    return this.postsCreateForm.get('price');
  }

  get startDate() {
    return this.postsCreateForm.get('startDate');
  }

  get status() {
    return this.postsCreateForm.get('status');
  }

  getCategoryList() {
    return this.postsService.getCategoryList().subscribe(categoryList => {
      this.categoryList = categoryList;
      console.log(categoryList);
      this.postsCreateForm.controls.category.setValue(this.categoryList[0]);
    });
  }

  getProvinceList() {
    return this.postsService.getProvinceList().subscribe(provinceList => {
      this.provinceList = provinceList;
      console.log(provinceList);
      this.postsCreateForm.controls.province.setValue(this.provinceList[0]);
    });
  }

  getDirectionList() {
    return this.postsService.getDirectionList().subscribe(directionList => {
      this.directionList = directionList;
      console.log(directionList);
      this.postsCreateForm.controls.direction.setValue(this.directionList[0]);
    });
  }

  submit() {
    if (this.postsCreateForm.valid) {
      const posts = this.postsCreateForm.value;
      console.log(posts);
      this.postsService.savePosts(posts).subscribe(() => {
        this.postsCreateForm.reset();
        alert('thành Công rồi pé ơi');
      });
    }
  }
}
