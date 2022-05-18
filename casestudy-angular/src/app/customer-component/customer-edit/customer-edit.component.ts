import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerType} from '../customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEditForm: FormGroup;
  id: number;
  customerTypeList: CustomerType [] = [
    {
      customerTypeId: 1,
      customerTypeName: 'Diamond'
    },
    {
      customerTypeId: 2,
      customerTypeName: 'Gold'
    }
  ];

  compare(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  constructor(private customerServiceService: CustomerServiceService, private activatedRoute: ActivatedRoute
    ,         private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  getCustomer(id: number) {
    console.log(id);
    return this.customerServiceService.findById(id).subscribe(customer => {
      console.log(customer);
      this.customerEditForm = new FormGroup({
        customerId: new FormControl(customer.customerId),
        customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern('^(KH-)(\\d{4})$')]),
        customerName: new FormControl(customer.customerName, [Validators.required, Validators.minLength(3)]),
        customerGender: new FormControl(customer.customerGender),
        // tslint:disable-next-line:max-line-length
        // dayOfBirth: new FormControl('', [Validators.required, Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')]),
        customerBirthday: new FormControl(customer.customerBirthday, [Validators.required]),
        customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern('^([0-9]{9})|([0-9]{12})$')]),
        customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('^(0|(\(84\)\+))+([9][0-1][0-9]{7})$')]),
        // tslint:disable-next-line:max-line-length
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,}$')]),
        customerAddress: new FormControl(customer.customerAddress, [Validators.required]),
        customerType: new FormControl(customer.customerType),
        deleteFlag: new FormControl(false)
      });
    });
  }

  ngOnInit(): void {
  }

  get customerCode() {
    return this.customerEditForm.get('customerCode');
  }

  get customerName() {
    return this.customerEditForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerEditForm.get('customerBirthday');
  }

  get customerIdCard() {
    return this.customerEditForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerEditForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerEditForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerEditForm.get('customerAddress');
  }

  submit() {
    const customer = this.customerEditForm.value;
    this.customerServiceService.updateCustomer( customer).subscribe(() => {
        this.router.navigate(['customer-list']);
      },
      error => {
        console.log(error);
      });
  }
}
