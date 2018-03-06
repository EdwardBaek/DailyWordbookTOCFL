import { Injectable } from '@angular/core';
import { Setting } from '../models/Setting';

@Injectable()
export class SettingService {
  // Set Default value
  setting: Setting = {
    level: 1,
    wordCardType: 0
  }
  localStorageName: string = 'setting';

  constructor() { 
    let data = this.getSettingFromLocalStorage();
    if(data != null) {
      this.setting = data;
    }
  }

  getSetting() : Setting {
    this.loadSettingFromLocalStorage();
    return this.setting;
  }
  getLevel() :number {
    this.loadSettingFromLocalStorage();
    return this.setting.level;
  }
  getWordCardType(): number {
    this.setting = JSON.parse(localStorage.getItem(this.localStorageName));
    return this.setting.wordCardType;
  }

  setSetting(setting: Setting) {
    this.setSettingToLocalStorage(setting);
    this.setting = setting;
  }
  setLevel(level: number) {
    this.setting.level = level;
    localStorage.setItem(this.localStorageName, JSON.stringify(this.setting));
  }
  setWordCardType(wordCardType: number) {
    this.setting.wordCardType = wordCardType;
    localStorage.setItem(this.localStorageName, JSON.stringify(this.setting));
  }
  
  private loadSettingFromLocalStorage() {
    this.setting = JSON.parse(localStorage.getItem(this.localStorageName));
  }
  private setSettingToLocalStorage(setting) {
    this.setting = setting;
    localStorage.setItem(this.localStorageName, JSON.stringify(this.setting));
  }
  
  getSettingFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.localStorageName));
  }

}
