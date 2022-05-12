import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  editRoomForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.editRoomForm = new FormGroup({
      serviceCode: new FormControl('DV-0001', [Validators.required, Validators.pattern('^(DV-)(\\d{4})$')]),
      serviceName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      serviceArea: new FormControl('', [Validators.required, Validators.min(1)]),
      serviceCost: new FormControl('', [Validators.required, Validators.min(10000000)]),
      serviceMaxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      rentType: new FormControl(),
      complimentaryService: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  get serviceCode(){
    return this.editRoomForm.get('serviceCode');
  }
  get serviceName(){
    return this.editRoomForm.get('serviceName');
  }
  get serviceArea(){
    return this.editRoomForm.get('serviceArea');
  }
  get serviceCost(){
    return this.editRoomForm.get('serviceCost');
  }
  get serviceMaxPeople(){
    return this.editRoomForm.get('serviceMaxPeople');
  }
  get complimentaryService(){
    return this.editRoomForm.get('complimentaryService');
  }

  submit() {
    console.log(this.editRoomForm);
  }
}
