import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  recentValue: number;
  originValue = 15;

  constructor() { }

  ngOnInit(): void {
  }
  @Output() countDown: EventEmitter<number> = new EventEmitter<number>();

  stop() {
    clearInterval(this.recentValue);
  }
  reset() {
    clearInterval(this.recentValue);
    this.originValue = 15;
    this.countDown.emit(this.originValue);
  }

  start() {
    this.recentValue = setInterval(() => {
      this.originValue--;
      this.countDown.emit(this.originValue);
      if (this.originValue === 0) {
        clearInterval(this.recentValue);
      }
    }, 1000);
  }
}
