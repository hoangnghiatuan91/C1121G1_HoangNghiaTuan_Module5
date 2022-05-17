import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';

import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = []

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe((contracts: Contract[]) => {
      this.contractList = contracts;
      console.log(this.contractList);
    });
  }

}
