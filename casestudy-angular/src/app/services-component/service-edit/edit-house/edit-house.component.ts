import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {

  editHouseForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.editHouseForm = new FormGroup({
      serviceCode: new FormControl('DV-0001', [Validators.required, Validators.pattern('^(DV-)(\\d{4})$')]),
      serviceName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      serviceArea: new FormControl('', [Validators.required, Validators.min(1)]),
      serviceCost: new FormControl('', [Validators.required, Validators.min(10000000)]),
      serviceMaxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      standardRoom: new FormControl(),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      numberOdFloors: new FormControl('', [Validators.required, Validators.min(1)]),
      rentType: new FormControl()
    });
  }
  get serviceCode(){
    return this.editHouseForm.get('serviceCode');
  }
  get serviceName(){
    return this.editHouseForm.get('serviceName');
  }
  get serviceArea(){
    return this.editHouseForm.get('serviceArea');
  }
  get serviceCost(){
    return this.editHouseForm.get('serviceCost');
  }
  get serviceMaxPeople(){
    return this.editHouseForm.get('serviceMaxPeople');
  }
  get descriptionOtherConvenience(){
    return this.editHouseForm.get('descriptionOtherConvenience');
  }
  get numberOdFloors(){
    return this.editHouseForm.get('numberOdFloors');
  }

  submit() {
    console.log(this.editHouseForm);
  }
}
