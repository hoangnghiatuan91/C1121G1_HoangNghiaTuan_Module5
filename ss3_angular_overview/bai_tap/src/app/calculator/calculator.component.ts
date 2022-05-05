import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  result?: any;
  calculator?: string;

  calculate(num: number) {
    if (num === 1) {
      this.result = this.num1 + this.num2;
    } else if (num === 2) {
      this.result = this.num1 - this.num2;
    } else if (num === 3) {
      if (this.num2 === 0) {
        this.result = 'Can not divide to zero';
      } else {
        this.result = this.num1 / this.num2;
      }
    } else if (num === 4) {
      this.result = this.num1 * this.num2;
    }

  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
