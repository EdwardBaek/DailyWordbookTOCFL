import { Component, OnInit } from '@angular/core';
import { Word } from '../../models/Word';
import { SettingService } from '../../services/setting.service';

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

  selectedLevel: number;
  selectedWordCardType: number;
  sampleWord: Word = {
    index : 1,
    word : '單字',
    sound : 'word sound',
    explain : 'explan of the word',
    class: '(class of word)',
  }

  shrink: string = 'down';

  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.selectedLevel = this.settingService.getLevel();
    this.selectedWordCardType = this.settingService.getWordCardType();
  }

  private setLevel(level) {
    console.log('setLevel', level);
    this.selectedLevel = level;
    this.settingService.setLevel(level);
  }
  
  private setWordCardType(wordCardType) {
    console.log('setWordCardType', wordCardType);
    this.selectedWordCardType = wordCardType;
    this.settingService.setWordCardType(wordCardType);
  }

  public toggle() {
      this.shrink = this.shrink === 'up' ? 'down' : 'up';
  }
}
