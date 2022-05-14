import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  public list: Word[] = [
    {
      id: 1,
      word: 'hello',
      mean: 'xin chào',
      detail: 'thán từ\n' +
        'chào anh!, chào chị!\n' +
        'này, này\n' +
        'ô này! (tỏ ý ngạc nhiên)\n' +
        'danh từ\n' +
        'tiếng chào\n' +
        'tiếng gọi "này, này" !\n' +
        'tiếng kêu ô này "! (tỏ ý ngạc nhiên)\n' +
        'nội động từ\n' +
        'chào\n' +
        'gọi "này, này"\n' +
        'kêu "ô này" (tỏ ý ngạc nhiên)'
    },
    {
      id: 2,
      word: 'goodbye',
      mean: 'tạm biệt',
      detail: 'danh từ\n' +
        'lời chào tạm biệt, lời chào từ biệt\n' +
        'to say good-bye to somebody: chào từ biệt ai, chia tay ai\n' +
        'to with (bid) someone good-bye: tạm biệt ai, từ biệt ai\n' +
        'thán từ\n' +
        'tạm biệt\n' +
        'good-bye for the present!: tạm biệt!\n' +
        'good-bye to the holidays: tạm biệt những ngày hè! thôi thế là hết những ngày hè!'
    },
    {
      id: 3,
      word: 'thank',
      mean: 'cảm ơn',
      detail: 'ngoại động từ\n' +
        'cám ơn, biết ơn\n' +
        'thank you: cám ơn anh\n' +
        'no, thank you: không, cám ơn anh (nói để từ chối)\n' +
        'xin, yêu cầu\n' +
        'I will thank you for the satchel: xin ông vui lòng đưa tôi cái cặp\n' +
        'I will thank you to shut the window: xin ông vui lòng đóng giúp cái cửa sổ\n' +
        'you have only yourself to thank for that; you may thank yourself for that\n' +
        'anh làm thì anh chịu'
    }
  ];

  constructor() {
  }

  findById(id: number) {
    return this.list.find(word => word.id === id);
  }
}
