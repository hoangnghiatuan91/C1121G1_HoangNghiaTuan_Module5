import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
@Output('rating') rating: EventEmitter<number> = new EventEmitter<number>();
numberRate: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numberPick = 0;
  constructor() { }
  ngOnInit(): void {}

  onMouseOver(items: number) {
    this.numberPick = items;
    this.rating.emit(this.numberPick);
  }

}
