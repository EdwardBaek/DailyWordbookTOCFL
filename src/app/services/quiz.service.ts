import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Question } from '../models/Question';
import { WordDataService } from '../services/word-data.service';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class QuizService {
  leftWords: Word[];
  wordList: Word[];
  questions: Question[];
  quizResult: Question[];
  scoreData: any = {
    socre: 0,
    totalWords:  5,
    level: 1,
    date: 'date',
    correctAnsweredWords : [],
    incorrectAnsweredWords : []
  };

  // Set Defualt value
  option: any = {
    level: 1,
    number: 5
  };

  constructor(private wordDataService: WordDataService) {
    console.log('>>>quizService is initailized.');
  }

  resetData() {
    this.questions = undefined;
    this.wordList = undefined;
  }
  set setOption(option) {
    this.option = option;
  }
  get getOption() {
    return this.option;
  }
  set setQuizResult(quizResult) {
    this.quizResult = this.getCopyArray(quizResult);
  }
  get getQuizResult() {
    return this.getCopyArray(this.quizResult);
  }
  
  async getReQuestions() {
    return await this.createQuestion();
  }
  async getNewQuestions() {
    this.resetData();
    return await this.createQuestion();
  }

  async createQuestion():Promise<Question[]> {
    // initial Data
    let wordData = await this.wordDataService.getWordList(this.option.level);
    this.questions = new Array(this.option.number);
    this.wordList = ( this.wordList ) ? this.wordList : this.getRandomWordsData(wordData, this.option.number);
    let fakeAnswers = this.getRandomIcorrectAnswerData(wordData, this.wordList);

    // console.log('wordData', wordData);
    // console.log( 'questions' , this.questions);
    // console.log( 'wordList', this.wordList );
    // console.log( 'fakeAnswers', fakeAnswers );
    // console.log( 'questions.length' , this.questions.length);
    
    let returnResult = this.getCopyArray(this.questions);

    for( var i=0; i < this.questions.length; i++) {
      // console.log('questions', i+1);
      let answers = this.getCopyArray( fakeAnswers[i] );
      answers.splice( this.getRandomInteger(answers.length), 0, this.wordList[i]);
      let question: Question = {
        index: i+1,
        questionWord: this.wordList[i],
        answers: answers,
        selectedWordIndex: undefined,
        isAnswerCorrect: undefined
      }
      // console.log( 'questions'+i, question );
      returnResult[i] = question;
    }

    console.log( 'questions', this.questions );
    // let returnResult = this.questions.slice();
    console.log('returnResult', returnResult);
    // console.log('this.questions', this.questions);
    return this.getCopyArray(this.questions);
  }

  get getScore() {
    if( !this.quizResult )
      return undefined;
    this.calculateScore();
    return this.scoreData;
  }

  private calculateScore() {
    let score: number = 0;
    let correctArray: any[] = [];
    let incorrectArray: any[] = [];

    console.log( this.quizResult);
    this.quizResult.forEach( (cur, inx) => {
      if ( cur.isAnswerCorrect != undefined ){
        if( cur.isAnswerCorrect ){
          score++;
          correctArray.push(cur.questionWord);
        } else {
          incorrectArray.push(cur.questionWord);
        }
      } else if( cur.selectedWordIndex == cur.questionWord.index ){
          score++;
          correctArray.push(cur.questionWord);
      } else {
        incorrectArray.push(cur.questionWord);
      }
    });

    this.scoreData = {
      score: score,
      totalWords: this.quizResult.length,
      date: new Date(),
      level: this.option.level,
      correctAnsweredWords: correctArray,
      incorrectAnsweredWords: incorrectArray
    }
  }

  private getRandomWordsData(wordDataRaw: any[], number: number): any[] {
    let wordData = this.getCopyArray(wordDataRaw);
    // Copy array value
    // console.log('getRandomWordsData start-length:', wordData.length);
    let wordArray = [];
    let tempIndex = 0;
    for(var i=0; i < number; i++) {
      tempIndex = this.getRandomInteger(wordData.length);
      wordArray[i] = wordData[tempIndex];
      wordData.splice(tempIndex, 1);
    }
    // console.log('getRandomWordsData end-length:', wordData.length);
    return wordArray;
  }
  private getRandomIcorrectAnswerData(wordDataRaw: any[], answer: any[]) :Word[] {
    const answerNum = 3;
    // Copy array value
    let wordData = this.getCopyArray(wordDataRaw);
    // console.log('getRandomIcorrectAnswerData start-length:', wordData.length);
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
      // tempArray.splice( this.getRandomInteger(answerNum+1), 0, cur);
      answerArray.push(tempArray);
      tempWordData = [];
      tempIndex = '';
    });
    
    // console.log('getRandomIcorrectAnswerData end-length:', wordData.length);
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
  private getCopyArray(originArray){
    let cloned = originArray ? originArray.slice() : null;
    // let cloned = originArray.map(x => Object.assign({}, x));
    return cloned;
  }
}
