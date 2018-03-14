import { Component, OnInit, Input } from '@angular/core';

import { SettingService } from '../../services/setting.service';
import { MockDataService } from '../../services/mock-data.service';

import { Word } from '../../models/Word';
import { CARD_TYPE_NAMES, LEVELS } from '../../models/Types';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-word-card-setting',
  templateUrl: './word-card-setting.component.html',
  styleUrls: ['./word-card-setting.component.css'],
  animations: [
    trigger('shrinkUpDown', [
      state('down', style({height: '*'})),
      state('up', style({height: '0', overflow: 'hidden',padding: '0'})),
      transition('down => up', [
        style({overflow: 'hidden'}),
        animate('0.5s ease-in', style({height: 0,overflow: 'hidden'}))
      ]),
      transition('up => down', [
        style({padding: '*'}),
        animate('0.5s ease-out', style({height: '*',overflow: 'hidden'}))
      ])
    ]),
  ]
})
export class WordCardSettingComponent implements OnInit {
  // Word Card Data Option 
  selectedLevel: number;
  selectedWordCardType: number;
  
  // Word Card Mock Data
  sampleWord: Word;

  // For Animation
  shrinkStatus: string = 'down';
  
  CARD_TYPE_NAMES;
  LEVELS;
  
  constructor(
    private settingService: SettingService,
    private mockDataService: MockDataService
      ) { 
    this.CARD_TYPE_NAMES = CARD_TYPE_NAMES;
    this.LEVELS = LEVELS;
  }

  ngOnInit() {
    this.selectedLevel = this.settingService.getLevel();
    this.sampleWord = this.mockDataService.getMocSamplekWordDataByLevel(this.selectedLevel);
    this.selectedWordCardType = this.settingService.getWordCardType();
  }

  private setLevel(level) {
    console.log('setLevel', level);
    this.selectedLevel = level;
    this.sampleWord = this.mockDataService.getMocSamplekWordDataByLevel(level);
    console.log('this.sampleWord', this.sampleWord);
    this.settingService.setLevel(level);
  }
  private setWordCardType(wordCardType) {
    console.log('setWordCardType', wordCardType);
    this.selectedWordCardType = wordCardType;
    this.settingService.setWordCardType(wordCardType);
  }

  public toggle() {
      this.shrinkStatus = this.shrinkStatus === 'up' ? 'down' : 'up';
  }
  // XXX: think of better names
  public shrinkUp() {
    this.shrinkStatus = 'up';
  }
  public shrinkDown() {
    this.shrinkStatus = 'down';
  }
}
