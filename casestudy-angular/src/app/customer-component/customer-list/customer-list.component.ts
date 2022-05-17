import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerServiceService} from '../../service/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
// customerList: Customer[] = CustomerData.customerList;
customerList: Customer[] = [];
  nameDelete: string;
  constructor(private customerServiceService: CustomerServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.customerServiceService.getAll().subscribe(customerList => {
      // @ts-ignore
      this.customerList = customerList.content;
    });
  }
  updateDeleteName(customerName: string) {
    this.nameDelete = customerName;
  }
}
