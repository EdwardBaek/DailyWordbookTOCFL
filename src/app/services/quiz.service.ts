import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Question } from '../models/Question';
import { WordDataService } from '../services/word-data.service';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class QuizService {
  leftWords: Word[];
  questions: Question[];
  answers: Word[];
  incorrectAnswers: any[];
  // Set Defualt value
  option: any = {
    level: 1,
    number: 20
  };

  constructor(private wordDataService: WordDataService) { }
  
  resetData() {
    this.leftWords = [];
    this.questions = [];
    this.answers = [];
    this.incorrectAnswers = [];
  }
  setOption(option) {
    this.option = option;
  }
  getOption() {
    return this.option;
  }
  async getNewQuestions(option:{level:number, number:number}):Promise<Question[]> {
    if(!option) option = this.option;
    this.resetData();
    // initial Data
    let wordData = await this.wordDataService.getWordList(option.level);
    this.questions = new Array(option.number);
    this.answers = this.getRandomWordsData(wordData, option.number);
    this.incorrectAnswers = this.getRandomIcorrectAnswerData(wordData, this.answers);
    // console.log('wordData',wordData);
    // console.log( 'answers', answers );
    // console.log( 'incorrectAnswers', incorrectAnswers );
    // console.log( 'questions' , questions);
    // console.log( 'questions.length' , questions.length);

    for( var i=0; i < this.questions.length; i++) {
      // console.log('questions', i+1);
      let question: Question = {
        index: i+1,
        questionWord: this.answers[i],
        answers: this.incorrectAnswers[i]
      }
      // console.log( 'questions'+i, question );
      this.questions[i] = question;
    }

    // console.log( 'questions', questions );
    return this.questions;
  }

  private getRandomWordsData(wordDataRaw: any[], number: number): any[] {
    let wordData = wordDataRaw.slice(0);
    // Copy array value
    console.log('getRandomWordsData start-length:', wordData.length);
    let wordArray = [];
    let tempIndex = 0;
    for(var i=0; i < number; i++) {
      tempIndex = this.getRandomInteger(wordData.length);
      wordArray[i] = wordData[tempIndex];
      wordData.splice(tempIndex, 1);
    }
    console.log('getRandomWordsData end-length:', wordData.length);
    return wordArray;
  }
  private getRandomIcorrectAnswerData(wordDataRaw: any[], answer: any[]) :Word[] {
    const answerNum = 3;
    // Copy array value
    let wordData = wordDataRaw.slice(0);
    console.log('getRandomIcorrectAnswerData start-length:', wordData.length);
    let answerArray = [];
    let tempWord;
    answer.forEach( (cur, inx) => {
      let tempWordData = wordData;
      let tempIndex;
      let tempArray:Word[] = [];
      for(var i=0; i < answerNum; i++) {
        do {
          tempIndex = this.getRandomInteger(wordData.length);
          tempWord = wordData[tempIndex];
        }while(tempWord == cur && this.hasInputValueInArray(tempArray, tempWord) )
        tempArray.push(tempWord);
        tempWordData.splice(tempIndex, 1);
      }
      tempArray.splice(this.getRandomInteger(answerNum-1), 0, cur);
      answerArray.push(tempArray);
      tempWordData = [];
      tempIndex = '';
    });
    
    console.log('getRandomIcorrectAnswerData end-length:', wordData.length);
    return answerArray;
  }
  getRandomInteger(max: number): number {
    return this.getRandomNumber(0, max);
  }
  private getRandomNumber(min: number, max: number) :number {
    return Math.floor( Math.random() * (max - min) + min);
  }
  private hasInputValueInArray(array: any[], value) :boolean {
    array.forEach( (cur, inx) => {
      if( cur == value ) return true;
    });
    return false;
  }

}
