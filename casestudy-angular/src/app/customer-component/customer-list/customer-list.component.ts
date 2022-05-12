import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerData} from '../customer-data';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customerList: Customer[] = CustomerData.customerList;
  nameDelete: string;
  constructor() { }

  ngOnInit(): void {
  }

  updateDeleteName(customerName: string) {
    this.nameDelete = customerName;
  }
}
