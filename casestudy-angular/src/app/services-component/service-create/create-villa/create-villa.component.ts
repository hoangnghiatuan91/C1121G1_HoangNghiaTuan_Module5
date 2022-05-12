import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-villa',
  templateUrl: './create-villa.component.html',
  styleUrls: ['./create-villa.component.css']
})
export class CreateVillaComponent implements OnInit {
  createVillaForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.createVillaForm = new FormGroup({
      serviceCode: new FormControl('', [Validators.required, Validators.pattern('^(DV-)(\\d{4})$')]),
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
    return this.createVillaForm.get('serviceCode');
   }
  get serviceName(){
    return this.createVillaForm.get('serviceName');
  }
  get serviceArea(){
    return this.createVillaForm.get('serviceArea');
  }
  get serviceCost(){
    return this.createVillaForm.get('serviceCost');
  }
  get serviceMaxPeople(){
    return this.createVillaForm.get('serviceMaxPeople');
  }
  get descriptionOtherConvenience(){
    return this.createVillaForm.get('descriptionOtherConvenience');
  }
  get poolArea(){
    return this.createVillaForm.get('poolArea');
  }
  get numberOdFloors(){
    return this.createVillaForm.get('numberOdFloors');
  }

  submit() {
    console.log(this.createVillaForm);
  }
}
