import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';
import {ContractData} from '../contract-data';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = ContractData.contractList
  constructor() { }

  ngOnInit(): void {
  }

}
