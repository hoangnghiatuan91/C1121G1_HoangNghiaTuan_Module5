import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEditForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.customerEditForm = new FormGroup({
      customerCode: new FormControl('KH-0001', [Validators.required, Validators.pattern('^(KH-)(\\d{4})$')]),
      customerName: new FormControl('Hoàng Nghĩa Tuân', [Validators.required, Validators.minLength(3)]),
      gender: new FormControl(''),
      // tslint:disable-next-line:max-line-length
      // dayOfBirth: new FormControl('', [Validators.required, Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')]),
      dayOfBirth: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('123456789', [Validators.required, Validators.pattern('^([0-9]{9})|([0-9]{12})$')]),
      customerPhone: new FormControl('0905419668', [Validators.required, Validators.pattern('^(0|(\(84\)\+))+([9][0-1][0-9]{7})$')]),
      // tslint:disable-next-line:max-line-length
      customerEmail: new FormControl('tuanhn.91@gmail.com', [Validators.required, Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,}$')]),
      customerAddress: new FormControl('Đà Nẵng', [Validators.required]),
      customerType: new FormControl()
    });
  }

  get customerCode() {
    return this.customerEditForm.get('customerCode');
  }

  get customerName() {
    return this.customerEditForm.get('customerName');
  }

  get dayOfBirth() {
    return this.customerEditForm.get('dayOfBirth');
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
    console.log(this.customerEditForm);
  }
}
