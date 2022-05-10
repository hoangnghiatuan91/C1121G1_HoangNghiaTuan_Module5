import { Component, OnInit } from '@angular/core';
import {Services} from '../services';
import {ServicesData} from '../services-data';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  servicesList: Services[] = ServicesData.servicesList
  constructor() { }

  ngOnInit(): void {
  }

}
