import {Component, OnInit} from '@angular/core';
import {Word} from '../model/word';
import {WordService} from '../service/word.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  listOfWord: Word[];

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.listOfWord = this.wordService.list;
  }
}
