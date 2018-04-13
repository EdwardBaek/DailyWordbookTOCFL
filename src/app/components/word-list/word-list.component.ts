import { Component, OnInit, HostListener, Output, EventEmitter, ViewChild } from '@angular/core';

import { WordDataService } from '../../services/word-data.service';
import { SettingService } from '../../services/setting.service';

import { Word } from '../../models/Word';
import { LEVELS } from '../../models/Types';

import { WordCardSettingComponent } from '../word-card-setting/word-card-setting.component';

import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
  animations: [
    trigger('showAndHide', [
      state('false', style({opacity: '0'})),
      state('true', style({opacity: '1'})),
      transition('false => true', animate('0.5s ease-in', style({ opacity:'1'}))),
      transition('true => false', animate('0.5s ease-out', style({ opacity:'0'}))),
    ]),
  
    trigger('flyInOutFromRigth', [
      state('true', style({  opacity: 1})),
      state('false', style({ opacity: 0})),
      transition('false => true', [
        style({transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.5s ease', style({opacity: 1})),
          animate('0.5s 0.2s ease', style({ transform: 'translateX(0)'})),
        ])
      ]),
      transition('true => false', [
        group([
          animate('0.5s ease', style({transform: 'translateX(50px)'})),
          animate('0.5s 0.2s ease', style({opacity: 0})),
        ])
      ])
    ])

  ],
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
  isscrolled = false;

  @ViewChild(WordCardSettingComponent) wordCardSettingComponent: WordCardSettingComponent;

  constructor(
    private wordDataService: WordDataService,
    private settingService: SettingService
  ) { }

  async ngOnInit(){
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
    console.log(data);
  }

  // Manage screen
  scroll(element) {
    element.scrollIntoView({behavior:"smooth"});
  }

  @HostListener('window:scroll', ['$event']) 
  private doSomething(event) {
    // 
    if( this.isLoadedData && ( window.pageYOffset + 1000 ) > ( document.documentElement.offsetHeight - window.innerHeight ) )
      this.displayWordsByLimit();
    
    // 
    if( window.pageYOffset > 600 ){
      this.isscrolled = true;
    } else {
      this.isscrolled = false;
    }
  }
}