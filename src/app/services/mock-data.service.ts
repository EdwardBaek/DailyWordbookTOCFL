import { Injectable } from '@angular/core';
import { LEVEL } from '../models/Types';
import { Word } from '../models/Word';
import { 
  MOCK_WORD_DATA_LEVEL_1, 
  MOCK_WORD_DATA_LEVEL_2, 
  MOCK_WORD_DATA_LEVEL_3, 
  MOCK_WORD_DATA_LEVEL_4, 
  MOCK_WORD_DATA_LEVEL_5,
  MOCK_SAMPLE_WORD_DATA,
  MOCK_QUIZ_RESULT,
  MOCK_QUIZ_SCORE 
} from './mock-data'

const WORDS_DATA: any[] = [
  MOCK_WORD_DATA_LEVEL_1,
  MOCK_WORD_DATA_LEVEL_2,
  MOCK_WORD_DATA_LEVEL_3,
  MOCK_WORD_DATA_LEVEL_4,
  MOCK_WORD_DATA_LEVEL_5
]

@Injectable()
export class MockDataService {

  constructor() { }

  getMocSamplekWordDataByLevel(level:number): Word {
    return MOCK_SAMPLE_WORD_DATA[ level -1 ];
  }
  getMockWordsDataByLevel(level: number): Word[] {
    return WORDS_DATA[level - 1];
  }
  get getMockQuizResult() {
    return MOCK_QUIZ_RESULT;
  }
  get getMockQuizScore() {
    return MOCK_QUIZ_SCORE
  }
}
