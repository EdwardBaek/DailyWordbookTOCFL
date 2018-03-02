import { Injectable } from '@angular/core';
import { Setting } from '../models/Setting';

@Injectable()
export class SettingService {
  // Set Default value
  setting: Setting = {
    level: 1,
    wordCardType: 0
  }

  constructor() { 
    let data = JSON.parse(localStorage.getItem('setting'));
    if(data != null) {
      this.setting = data;
    }
  }

  getLevel() :number {
    this.setting = JSON.parse(localStorage.getItem('setting'));
    return this.setting.level;
  }
  getWordCardType(): number {
    this.setting = JSON.parse(localStorage.getItem('setting'));
    return this.setting.wordCardType;
  }
  setLevel(level: number) {
    this.setting.level = level;
    localStorage.setItem('setting', JSON.stringify(this.setting));
  }
  setWordCardType(wordCardType: number) {
    this.setting.wordCardType = wordCardType;
    localStorage.setItem('setting', JSON.stringify(this.setting));
  }
  saveSetting(setting) {
    this.setting = setting;
    localStorage.setItem('setting', JSON.stringify(this.setting));
  }

}
