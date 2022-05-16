import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  nameDelete: string;
  idDelete: number;
  number: number;
  totalPages: any;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
   this.productService.getAll().subscribe(products => {
     this.products = products;
   });
  }

  updateDeleteName(name: string, id: number) {
    this.nameDelete = name;
    this.idDelete = id;
  }

  // next() {
  //   if (this.number < this.totalPages - 1) {
  //     this.productService.getAll(this.number + 1).subscribe(
  //       data => {
  //         this.products = data.content;
  //         this.number = data.number;
  //         console.log(data);
  //       }, err => console.log(err)
  //     );
  //   }
  // }
  // previous() {
  //   if (this.number > 0) {
  //     this.customerService.findAllCustomer(this.number - 1).subscribe(
  //       data => {
  //         this.customers = data.content;
  //         this.number = data.number;
  //         console.log(data);
  //       }, err => console.log(err)
  //     );
  //   }
  // }
}
