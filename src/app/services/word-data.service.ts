import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';  
import { UtilService } from './util.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class WordDataService {
  wordData = {
    level1: [],
    level2: [],
    level3: [],
    level4: [],
    level5: []
  };
  wordDataVersion: string;
  selectedLevel: number = 1;

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) { }

  /*** Method ***/
  async getWordList(level: number){
    let wordList = this.getWordDataByLevel(level);
    this.selectedLevel = level;
    
    console.log('>>>try load data from memory');
    if(wordList && wordList.length > 0) {
      console.log('>>>Data from memory', wordList);
      return this.getCopyArray(wordList);
    }

    wordList = this.getWordDataFromLocalStorage(level);
    if(wordList && wordList.length > 0) {
      console.log('>>>Data from localStorage', wordList);
      return this.getCopyArray(wordList);
    }
    
    let responsedData = await this.getWordDataFromNetwork(level);
    // For Test
    // let responsedData = await this.getWordDataFromNetworkSlowly(level);
    console.log('>>>Data Level -' + level, responsedData.data);
    
    this.setWordDataByLevel(level, responsedData.data);
    this.setWordDataToLocalStorage(level, responsedData.data);

    return this.getCopyArray(responsedData.data);
  }

  /*** Set Method from Util Service ***/
  private getCopyArray(originArray): any[] {
    return this.utilService.getCopyArray(originArray);
    // return originArray.slice();
  }

  /*** Private Method ***/
  private getWordListDataUrlByLevel(level:number): string {
    if(!level) level = 1;
    return 'assets/data/level' + level + '.json';
  }
  private getWordDataByLevel(level:number): any[] {
    if(!level) level = 1;
    return this.wordData['level'+level];
  }
  private setWordDataByLevel(level:number, wordList: any[]) {
    if(!level) level = 1;
    return this.wordData['level'+level] = wordList;
  }

  async getWordDataFromNetwork(level: number): Promise<any> {
    console.log('>>>try load data from network');
    try {
      let response = await this.http
      .get(this.getWordListDataUrlByLevel(level))
      .toPromise();
      return response;
    } catch (error) {
      await this.handleError(error);
    }
  }

  getTestValue(param: any): any{
    return param;
  }
  getTestHttp<T>(level: number) {
    return this.http.get<T>(this.getWordListDataUrlByLevel(level));
  }
  
  // For delay test
  private async getWordDataFromNetworkSlowly(level: number): Promise<any> {
    console.log('>>>try load data from network');
    await new Promise<any[]>(resolve =>
      setTimeout(resolve, this.getRandomNumber(2000, 10000)));
    return await this.getWordDataFromNetwork(level);
  }
  private getRandomNumber(min: number, max: number) :number {
    return Math.floor( Math.random() * (max - min) + min);
  }

  private getWordDataFromLocalStorage(level: number): any[] {
    console.log('>>>try load data from localStorage');
    let data = JSON.parse(localStorage.getItem(this.getLocalStorageItemName(level)));
    if(data != null) {
      this.setWordDataByLevel(level, data);
      return data;
    }
    return [];
  }
  private setWordDataToLocalStorage(level: number, data: any[]) {
    localStorage.setItem(this.getLocalStorageItemName(level), JSON.stringify(data));
  }
  
  private getLocalStorageItemName(level: number): string {
    return 'wordDataLevel' + level;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
    
  }
}
