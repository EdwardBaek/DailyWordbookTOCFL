import { Component, OnInit } from '@angular/core';

import { WordDataService } from '../../services/word-data.service';

import { Word } from '../../models/Word';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  words: Word[] = [];
  isLoadingData: boolean = false;
  radioValue: boolean = false;
  selectedLevel: number = 2;
  selectedWordCardType: number = 0;
  wordCardTypes = [
    {
      index: 0, 
      value: 'SimpleCard'
    },
    {
      index: 1, 
      value: 'FlipCard'
    }
  ];

  constructor(private wordDataService: WordDataService) { }

  ngOnInit(){
  }

  setLevel(level) {
    this.selectedLevel = level;
  }

  async loadWordData() {
    await this.test(this.selectedLevel);
  }

  async test(level: number) {
    this.resetWordsData();
    this.isLoadingData = true;
    let words = await this.wordDataService.getWordList(level);
    this.words = words;
    this.isLoadingData = false;
  }

  resetWordsData() {
    this.words = [];
  }

  log(data) {
    console.log(data);
  }

  onRadioChange() {
    this.radioValue = !this.radioValue;
    console.log('this.radioValue',this.radioValue);
  }
  getWordCardType() {
    return this.wordCardTypes[this.selectedWordCardType].value;
  }
  setWordCardType(index) {
    this.selectedWordCardType = index;
    console.log( 'index', index );
    console.log( 'this.getWordCardType()',this.getWordCardType() );
  }
  isFlipCardType() {
    return (this.getWordCardType() == 'FlipCard')
  }
  isSimpleCardType() {
    return (this.getWordCardType() == 'SimpleCard')
  }

}
