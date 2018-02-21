import { Component, OnInit, HostListener } from '@angular/core';

import { WordDataService } from '../../services/word-data.service';

import { Word } from '../../models/Word';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  wordsRaw: Word[] = [];
  // For display
  words: Word[] = [];
  isLoadingData: boolean = false;
  isLoadedData: boolean = false;
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

  loadItemCount: number = 100;

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
    if(this.isLoadedData) return;
    this.resetWordsData();
    this.isLoadingData = true;
    this.wordsRaw = await this.wordDataService.getWordList(level);
    this.isLoadingData = false;
    this.isLoadedData = true;
    this.displayWordsByLimit();    
  }

  displayWordsByLimit() {
    let limitCount = this.loadItemCount;
    if(this.wordsRaw.length < limitCount) limitCount = this.wordsRaw.length;
    let tempArrayData = this.wordsRaw.splice(0, limitCount);
    this.words = this.words.concat(tempArrayData);
    console.log('displayWordsByLimit', `display ${limitCount} items from raw data`);
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
  
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    if( this.isLoadedData && ( window.pageYOffset + 1000 ) > ( document.documentElement.offsetHeight - window.innerHeight ) )
      this.displayWordsByLimit();
  }
}