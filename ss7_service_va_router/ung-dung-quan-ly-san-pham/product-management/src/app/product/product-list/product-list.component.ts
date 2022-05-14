import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  nameDelete: string;
  idDelete: number

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.products = this.productService.getAll();
  }

  updateDeleteName(name: string, id: number) {
    this.nameDelete = name;
    this.idDelete = id;
  }
  findById(id: number) {
    return this.productService.findById(this.idDelete);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.idDelete);
    console.log('hihi')
    this.router.navigateByUrl('product/list')
  }
}
