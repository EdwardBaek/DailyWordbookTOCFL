import { Injectable } from '@angular/core';
import { LEVEL } from '../models/Types';
import { Word } from '../models/Word';

export const WORD_DATA: any[] = [
  {
    id: LEVEL.LEVEL_1,
    data:
      {
        index : 1,
        word : '成績',
        sound : 'chéngjī',
        explain : 'grade(at school), academic record, achievement',
        class: '(N)',
        level: 'Level 1'
      }
  },
  {
    id: LEVEL.LEVEL_2,
    data:
      {
        index : 101,
        word : '真',
        sound : 'zhēn',
        explain : 'to be real, true',
        class: '(VS)',
        level: 'Level 2'
      }
  },
  {
    id: LEVEL.LEVEL_3,
    data:
      {
        index : 301,
        word : '看法',
        sound : 'kànfǎ',
        explain : 'way of looking at sth, view',
        class: '(N)',
        level: 'Level 3'
      }
  },
  {
    id: LEVEL.LEVEL_4,
    data:
      {
        index : 1902,
        word : '基本',
        sound : 'jīběn',
        explain : 'fundamental, essential, main',
        class: '(VS)',
        level: 'Level 4'
      }
  },
  {
    id: LEVEL.LEVEL_5,
    data:
      {
        index : 2414,
        word : '認錯',
        sound : 'rèncuò',
        explain : 'admit mistake,apologize',
        class: '(VA)',
        level: 'Level 5'
      }
  }
];

@Injectable()
export class MockDataService {

  constructor() { }

  getMockWordDataByLevel(level:number): Word {
    let returnValue: Word;
    for( let data of WORD_DATA ) {
      if( data.id == level ) {
        returnValue = data.data;
        break;
      }
    }
    return returnValue;
  }
}
