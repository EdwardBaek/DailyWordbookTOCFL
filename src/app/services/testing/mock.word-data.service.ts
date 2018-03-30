import { MockDataService } from '../mock-data.service';

export class MockWordDataService{
  wordData = {
    level1: [],
    level2: [],
    level3: [],
    level4: [],
    level5: []
  };
  selectedLevel: number = 1;

  constructor(
    private mockDataService: MockDataService
  ) {
  }

  getWordList(level: number) {
    this.selectedLevel = level;
    let wordList = this.mockDataService.getMockWordsDataByLevel(this.selectedLevel);
    this.setWordDataByLevel( this.selectedLevel, wordList );
    
    return this.getWordDataByLevel(this.selectedLevel);
  }
  private getWordDataByLevel(level:number): any[] {
    if(!level) level = 1;
    return this.wordData['level'+level];
  }
  private setWordDataByLevel(level:number, wordList: any[]) {
    if(!level) level = 1;
    return this.wordData['level'+level] = wordList;
  }
}

