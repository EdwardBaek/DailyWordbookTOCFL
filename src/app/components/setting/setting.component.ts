import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { Word } from '../../models/Word';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  selectedLevel: number;
  selectedWordCardType: number;
  sampleWord: Word = {
    index : 1,
    word : '單字',
    sound : 'word sound',
    explain : 'explan of the word',
    class: '(class of word)',
  }
  gender = 'male';
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
}
