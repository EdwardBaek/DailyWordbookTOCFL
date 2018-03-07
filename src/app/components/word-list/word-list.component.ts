import { Component, OnInit, HostListener, Output, EventEmitter, ViewChild } from '@angular/core';

import { WordDataService } from '../../services/word-data.service';
import { SettingService } from '../../services/setting.service';

import { Word } from '../../models/Word';
import { LEVELS } from '../../models/Types';

import { WordCardSettingComponent } from '../word-card-setting/word-card-setting.component';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  // Data Management
  wordsRaw: Word[] = [];
  isLoadingData: boolean = false;
  isLoadedData: boolean = false;
  
  // Word Card Option
  selectedLevel: number;
  selectedWordCardType: number = 0;
  
  // For display Word Cards
  words: Word[] = [];
  loadItemCount: number = 100;

  shrinkCardSetting:string = 'down';


  @ViewChild(WordCardSettingComponent) wordCardSettingComponent: WordCardSettingComponent;

  constructor(
    private wordDataService: WordDataService,
    private settingService: SettingService
  ) { }

  async ngOnInit(){
    // console.debug('ngOninit-isLoadedData:', this.isLoadedData);
    this.selectedLevel = this.settingService.getLevel();
    this.selectedWordCardType = this.settingService.getWordCardType();
    await this.loadWordData(this.selectedLevel);
  }
  
  async reload() {
    // change UI
    this.wordCardSettingComponent.shrinkUp();

    // reload
    this.selectedWordCardType = this.settingService.getWordCardType();
    let selectedLevel = this.settingService.getLevel();
    if( selectedLevel != this.selectedLevel ){
      this.selectedLevel = selectedLevel;
      console.debug('selected level is different, start loadWordData')
      this.isLoadedData = false;
      await this.loadWordData(this.selectedLevel);
    }
  }

  private async loadWordData(level: number) {
    if(this.isLoadedData) return;
    this.resetWordsData();
    this.isLoadingData = true;
    this.wordsRaw = await this.wordDataService.getWordList(level);
    this.isLoadingData = false;
    this.isLoadedData = true;
    this.displayWordsByLimit();    
  }

  private displayWordsByLimit() {
    let limitCount = this.loadItemCount;
    if(this.wordsRaw.length < limitCount) limitCount = this.wordsRaw.length;
    let tempArrayData = this.wordsRaw.splice(0, limitCount);
    this.words = this.words.concat(tempArrayData);
    console.debug('displayWordsByLimit', `display ${limitCount} items from raw data`);
  }

  private resetWordsData() {
    this.words = [];
    this.wordsRaw = [];
  }

  getLevelName(): string {
    let returnValue: string;
    for( let level of LEVELS ) {
      if( level.id == this.selectedLevel ) {
        returnValue = level.name;
        break;
      }
    }
    return returnValue;
  }

  log(data) {
    console.log(data, data == '' || data == 0);
  }

  // Manage screen
  scroll(element) {
    element.scrollIntoView({behavior:"smooth"});
  }

  @HostListener('window:scroll', ['$event']) 
  private doSomething(event) {
    if( this.isLoadedData && ( window.pageYOffset + 1000 ) > ( document.documentElement.offsetHeight - window.innerHeight ) )
      this.displayWordsByLimit();
  }
}