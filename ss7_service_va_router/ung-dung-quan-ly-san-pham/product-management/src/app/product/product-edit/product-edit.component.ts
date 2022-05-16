import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // productForm: FormGroup;
  // id: number;
  // categories: Category[] = [];
  //
  // constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
  //             private categoryService: CategoryService, private router: Router) {
  //   this.productForm = new FormGroup({
  //     id: new FormControl(),
  //     name: new FormControl(),
  //     price: new FormControl(),
  //     description: new FormControl(),
  //     category: new FormControl(),
  //   });
  //
  //   activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //     this.id = +paramMap.get('id');
  //     const product = this.findById(this.id);
  //     this.productForm.patchValue(product);
  //   });
  // }
  //
  // ngOnInit(): void {
  //   this.getAllCategory();
  // }
  //
  // findById(id: number) {
  //   return this.productService.findById(id);
  // }
  //
  // updateProduct(id: number) {
  //   const product = this.productForm.value;
  //
  //     // this.productService.updateProduct(id, product);
  //     alert('thành công rồi pé ơi');
  // }
  //
  // getAllCategory() {
  //   this.categoryService.getAll().subscribe(categoryList => {
  //     this.categories = categoryList;
  //   });
  // }
  productForm: FormGroup;
  id: number;
  categoryList: Category[] = [];

  compareFn(o1: Category, o2: Category): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category)
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      this.router.navigate(['/product']);
    }, error => {
      console.log(error);
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }
}
