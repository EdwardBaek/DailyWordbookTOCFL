import { Component, OnInit, HostListener } from '@angular/core';

import { WordDataService } from '../../services/word-data.service';

import { Word } from '../../models/Word';
import { SettingService } from '../../services/setting.service';

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
  selectedLevel: number;
  selectedWordCardType: number = 0;
  wordCardTypes = [
    {
      index: 0, 
      value: 'SimpleCard'
    },
    {
      index: 1, 
      value: 'FlipCard'
    },
    {
      index: 2, 
      value: 'FlipCard2'
    }
  ];

  loadItemCount: number = 100;

  constructor(
    private wordDataService: WordDataService,
    private settingService: SettingService
  ) { }

  ngOnInit(){
    console.log('ngOnInit');
    console.log('ngOninit-isLoadedData:', this.isLoadedData);
    this.selectedLevel = this.settingService.getLevel();
    this.setWordCardType(this.settingService.getWordCardType());
    this.loadWordData();
  }
  
  async reload() {
    this.selectedLevel = this.settingService.getLevel();
    this.setWordCardType(this.settingService.getWordCardType());
    await this.test(this.selectedLevel);
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
    this.wordsRaw = [];
  }

  log(data) {
    console.log(data);
  }

  getWordCardType() {
    return this.wordCardTypes[this.selectedWordCardType].value;
  }
  setWordCardType(index) {
    this.selectedWordCardType = index;
    console.log( 'setWordCardType index', index );
    console.log( 'this.getWordCardType()',this.getWordCardType() );
  }
  private isFlipCardType() {
    return (this.getWordCardType() == 'FlipCard')
  }
  private isSimpleCardType() {
    return (this.getWordCardType() == 'SimpleCard')
  }
  
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    if( this.isLoadedData && ( window.pageYOffset + 1000 ) > ( document.documentElement.offsetHeight - window.innerHeight ) )
      this.displayWordsByLimit();
  }
}