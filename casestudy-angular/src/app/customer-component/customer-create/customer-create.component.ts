import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {CustomerType} from '../customer-type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerCreateForm: FormGroup;
  customerTypeList: CustomerType [] = [
    {customerTypeId: 1,
      customerTypeName: 'Diamond'},
    {customerTypeId: 2,
      customerTypeName: 'Gold'}
  ]
  constructor(private customerServiceService: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.customerCreateForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required, Validators.pattern('^(KH-)(\\d{4})$')]),
      customerName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      customerGender: new FormControl(),
      // tslint:disable-next-line:max-line-length
      // dayOfBirth: new FormControl('', [Validators.required, Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9})|([0-9]{12})$')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(0|(\(84\)\+))+([9][0-1][0-9]{7})$')]),
      // tslint:disable-next-line:max-line-length
      customerEmail: new FormControl('', [Validators.required, Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,}$')]),
      customerAddress: new FormControl('', [Validators.required]),
      customerType: new FormControl(),
      deleteFlag: new FormControl(false)
    });
  }

  get customerCode() {
    return this.customerCreateForm.get('customerCode');
  }

  get customerName() {
    return this.customerCreateForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerCreateForm.get('customerBirthday');
  }

  get customerIdCard() {
    return this.customerCreateForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerCreateForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerCreateForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerCreateForm.get('customerAddress');
  }

  submit() {
    const customer = this.customerCreateForm.value;
    this.customerServiceService.saveCustomer(customer).subscribe(() => {
      this.customerCreateForm.reset();
    }, error => {
      console.log(error);
    });
  }
}
