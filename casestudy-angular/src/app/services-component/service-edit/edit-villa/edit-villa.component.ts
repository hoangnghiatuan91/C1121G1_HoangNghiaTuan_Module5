import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-villa',
  templateUrl: './edit-villa.component.html',
  styleUrls: ['./edit-villa.component.css']
})
export class EditVillaComponent implements OnInit {
  editVillaForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.editVillaForm = new FormGroup({
      serviceCode: new FormControl('DV-0001', [Validators.required, Validators.pattern('^(DV-)(\\d{4})$')]),
      serviceName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      serviceArea: new FormControl('', [Validators.required, Validators.min(1)]),
      serviceCost: new FormControl('', [Validators.required, Validators.min(10000000)]),
      serviceMaxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      standardRoom: new FormControl(),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      poolArea: new FormControl('', [Validators.required, Validators.min(30)]),
      numberOdFloors: new FormControl('', [Validators.required, Validators.min(1)]),
      rentType: new FormControl()
    });
  }
  get serviceCode(){
    return this.editVillaForm.get('serviceCode');
  }
  get serviceName(){
    return this.editVillaForm.get('serviceName');
  }
  get serviceArea(){
    return this.editVillaForm.get('serviceArea');
  }
  get serviceCost(){
    return this.editVillaForm.get('serviceCost');
  }
  get serviceMaxPeople(){
    return this.editVillaForm.get('serviceMaxPeople');
  }
  get descriptionOtherConvenience(){
    return this.editVillaForm.get('descriptionOtherConvenience');
  }
  get poolArea(){
    return this.editVillaForm.get('poolArea');
  }
  get numberOdFloors(){
    return this.editVillaForm.get('numberOdFloors');
  }

  submit() {
    console.log(this.editVillaForm);
  }
}
