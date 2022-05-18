import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../employee';
import {Customer} from '../customer';
import {Service} from '../service';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';
import {Contract} from '../contract';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  employeeList: Employee[] = [];

  customerList: Customer[] = [];

  serviceList: Service[] = [];
  createContractForm: FormGroup;
  private contract: Contract;
  compare(o1: any, o2: any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  constructor(private contractService: ContractService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerList();
    this.getEmployeeList();
    this.getServiceList();
    this.createContractForm = new FormGroup({
      contractCode: new FormControl('', [Validators.required, Validators.pattern('^(HD-)(\\d{4})$')]),
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
      endDate: new FormControl('', [Validators.required]),
      contractDeposit: new FormControl('', [Validators.required, Validators.min(10000000)]),
      total: new FormControl('', [Validators.required, Validators.min(10000000)]),
      employee: new FormControl(),
      customer: new FormControl(),
      service: new FormControl(),
    });
  }

  get contractCode() {
    return this.createContractForm.get('contractCode');
  }

  get startDate() {
    return this.createContractForm.get('startDate');
  }

  get endDate() {
    return this.createContractForm.get('endDate');
  }

  get contractDeposit() {
    return this.createContractForm.get('contractDeposit');
  }
  get total() {
    return this.createContractForm.get('total');
  }
  validateDate(){
    let date1 = new Date(this.createContractForm.get('startDate').value);
    let date2 = new Date(this.createContractForm.get('endDate').value);
    if (date1.getTime() >= date2.getTime()){
      this.createContractForm.get('endDate').setErrors({dateBeforeError: true});
    }
  }
  validateCurrentDate(){
    let current = new Date();
    let date1 = new Date(this.createContractForm.get('startDate').value);
    if (current.getTime() > date1.getTime()){
      this.createContractForm.get('startDate').setErrors({dayStartError: true});
    }
  }
  getCustomerList() {
    this.contractService.getCustomerList().subscribe((customers: Customer[]) => {
      this.customerList = customers;
      this.createContractForm.controls.customer.setValue(this.customerList[0]);
    });
  }

  getEmployeeList() {
    this.contractService.getEmployeeList().subscribe((employees: Employee[]) => {
      this.employeeList = employees;
      this.createContractForm.controls.employee.setValue(this.employeeList[0]);
    });
  }

  getServiceList() {
    this.contractService.getServiceList().subscribe((services: Service[]) => {
      this.serviceList = services;
      this.createContractForm.controls.service.setValue(this.serviceList[0]);
    });
  }

  submit() {
    this.contract = this.createContractForm.value;
    console.log(this.contract)
    this.contractService.saveContract(this.contract).subscribe(() => {
      this.contractService.getAll();
      this.router.navigate(['contract-list']);
    });
  }
}
