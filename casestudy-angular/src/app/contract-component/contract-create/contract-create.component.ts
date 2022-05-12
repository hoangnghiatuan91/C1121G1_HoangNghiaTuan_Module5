import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
createContractForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createContractForm = new FormGroup({
      contractCode: new FormControl('', [Validators.required, Validators.pattern('^(HD-)(\\d{4})$')]),
      contractStartDate: new FormControl('', [Validators.required]),
      contractEndDate: new FormControl('', [Validators.required]),
      contractDeposit: new FormControl('', [Validators.required, Validators.min(10000000)]),
      employee: new FormControl(),
      customer: new FormControl(),
      service: new FormControl(),
    });
  }
  get contractCode(){
    return this.createContractForm.get('contractCode');
  }
  get contractStartDate(){
    return this.createContractForm.get('contractStartDate');
  }
  get contractEndDate(){
    return this.createContractForm.get('contractEndDate');
  }
  get contractDeposit(){
    return this.createContractForm.get('contractDeposit');
  }

  submit() {
    console.log(this.createContractForm);
  }
}
