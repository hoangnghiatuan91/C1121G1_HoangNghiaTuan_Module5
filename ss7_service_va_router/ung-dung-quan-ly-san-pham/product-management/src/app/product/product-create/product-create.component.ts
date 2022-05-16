import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[] = [];

  constructor(private  productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }

  submit() {
    const product = this.productForm.value;

    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      }, error => {console.log(error);
    });
    // this.productService.saveProduct(product);
    // this.productForm.reset();
  }
}
