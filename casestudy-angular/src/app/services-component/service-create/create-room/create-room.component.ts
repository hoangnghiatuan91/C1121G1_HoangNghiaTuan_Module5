import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  createRoomForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createRoomForm = new FormGroup({
      serviceCode: new FormControl('', [Validators.required, Validators.pattern('^(DV-)(\\d{4})$')]),
      serviceName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      serviceArea: new FormControl('', [Validators.required, Validators.min(1)]),
      serviceCost: new FormControl('', [Validators.required, Validators.min(10000000)]),
      serviceMaxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      rentType: new FormControl(),
      complimentaryService: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  get serviceCode(){
    return this.createRoomForm.get('serviceCode');
  }
  get serviceName(){
    return this.createRoomForm.get('serviceName');
  }
  get serviceArea(){
    return this.createRoomForm.get('serviceArea');
  }
  get serviceCost(){
    return this.createRoomForm.get('serviceCost');
  }
  get serviceMaxPeople(){
    return this.createRoomForm.get('serviceMaxPeople');
  }
  get complimentaryService(){
    return this.createRoomForm.get('complimentaryService');
  }

  submit() {
    console.log(this.createRoomForm);
  }
}
