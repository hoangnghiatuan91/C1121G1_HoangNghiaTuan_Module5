import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  createHouseForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createHouseForm = new FormGroup({
      serviceCode: new FormControl('', [Validators.required, Validators.pattern('^(DV-)(\\d{4})$')]),
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
    return this.createHouseForm.get('serviceCode');
  }
  get serviceName(){
    return this.createHouseForm.get('serviceName');
  }
  get serviceArea(){
    return this.createHouseForm.get('serviceArea');
  }
  get serviceCost(){
    return this.createHouseForm.get('serviceCost');
  }
  get serviceMaxPeople(){
    return this.createHouseForm.get('serviceMaxPeople');
  }
  get descriptionOtherConvenience(){
    return this.createHouseForm.get('descriptionOtherConvenience');
  }
  get numberOdFloors(){
    return this.createHouseForm.get('numberOdFloors');
  }

  submit() {
    console.log(this.createHouseForm);
  }
}
