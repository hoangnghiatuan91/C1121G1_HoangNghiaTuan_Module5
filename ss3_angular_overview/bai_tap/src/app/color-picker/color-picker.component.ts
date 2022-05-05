import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  colorValue?: number;
  color?: string;

  changeColor() {
    switch (this.colorValue) {
      case 1:
        this.color = "blue";
        break;
      case 2:
        this.color = "green";
        break;
      case 3:
        this.color = "yellow";
        break;
      case 4:
        this.color = "red";
        break;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
