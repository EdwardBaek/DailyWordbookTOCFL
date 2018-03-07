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
    console.log('getLevel',this.setting);
    return this.setting.level;
  }
  getWordCardType(): number {
    this.loadSettingFromLocalStorage();
    console.log('getLevel',this.setting);
    return this.setting.wordCardType;
  }

  setSetting(setting: Setting) {
    this.setSettingToLocalStorage(setting);
    this.setting = setting;
  }
  setLevel(level: number) {
    this.setting.level = level;
    this.setSettingToLocalStorage(this.setting);
  }
  setWordCardType(wordCardType: number) {
    this.setting.wordCardType = wordCardType;
    this.setSettingToLocalStorage(this.setting);
  }
  
  private loadSettingFromLocalStorage() {
    const setting = JSON.parse(localStorage.getItem(this.localStorageName)); 
    console.log('loadSettingFromLocalStorage :', setting, !setting && setting != null);
    if( !setting && setting != null )
      this.setting = setting; 
  }
  private setSettingToLocalStorage(setting) {
    localStorage.setItem(this.localStorageName, JSON.stringify(setting));
  }
  
  getSettingFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.localStorageName));
  }

}
