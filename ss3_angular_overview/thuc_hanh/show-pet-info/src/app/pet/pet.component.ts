import {Component, OnInit} from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'cogi',
    image: 'https://i.imgur.com/ICSfqEZl.jpg'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
