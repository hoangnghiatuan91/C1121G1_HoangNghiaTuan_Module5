import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {CustomerType} from '../customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
// customerList: Customer[] = CustomerData.customerList;

customerList: Customer[] = [];
  nameDelete: string;
  idDelete: number
  customerDelete: Customer
  number = 0;
  totalPages = 0;
  constructor(private customerServiceService: CustomerServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.customerServiceService.getAll(this.number).subscribe(customerList => {
      // @ts-ignore
      this.customerList = customerList.content;
      this.totalPages = customerList.totalPages;
    });
  }
  updateDeleteName(customerName: string, idDel: number) {
    this.nameDelete = customerName;
    this.idDelete = idDel;
  }

  delete(closeModal: HTMLButtonElement) {
    this.customerServiceService.findById(this.idDelete).subscribe(res => {
      this.customerDelete = res;
      console.log(res);
      this.customerServiceService.deleteCustomer(this.customerDelete).subscribe(() => {
        closeModal.click();
        alert('thành công rồi');
        this.ngOnInit();
      });
    });
  }

  next() {
    if (this.number < this.totalPages - 1) {
      this.customerServiceService.getAll(this.number + 1).subscribe(
        data => {
          this.customerList = data.content;
          this.number = data.number;
          console.log(data);
        }, err => console.log(err)
      );
    }
  }
  previous() {
    if (this.number > 0) {
      this.customerServiceService.getAll(this.number - 1).subscribe(
        data => {
          this.customerList = data.content;
          this.number = data.number;
          console.log(data);
        }, err => console.log(err)
      );
    }
  }
}
