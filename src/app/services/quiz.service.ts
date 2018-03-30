import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Question } from '../models/Question';
import { WordDataService } from '../services/word-data.service';
import { forEach } from '@angular/router/src/utils/collection';
import { UtilService } from './util.service';

@Injectable()
export class QuizService {
  private option: any;
  private questions: Question[];
  private questionWords: Word[];
  private quizResult: Question[];
  private scoreData: any;

  constructor(
    private wordDataService: WordDataService,
    private utilService: UtilService
  ) {
    this.init();
  }

  /*
    Work Flow
    1.(Optional) setOption
    2. getNewQuestions
    3. setQuizResult
    4. getScore
    5. (Optional) getReQuestions -> 3. setQuizResult
   */

  /*** Method ***/  
  init() {
    this.scoreData = {
      socre: 0,
      totalWords:  5,
      level: 1,
      date: new Date(),
      correctAnsweredWords : [],
      incorrectAnsweredWords : []
    };
    this.option = {
      level: 1,
      number: 5
    };
  }
  resetData() {
    this.questions = undefined;
    this.questionWords = undefined;
    this.quizResult = undefined;
    this.init();
  }

  set setOption(option) {
    this.option = option;
  }
  get getOption() {
    return this.option;
  }
  set setQuestionWords(questionWords) {
    this.questionWords = questionWords;
  }
  get getQuestionWords() {
    return this.questionWords;
  }
  async getReQuestions() {
    return await this.createQuestion();
  }
  async getNewQuestions() {
    this.resetData();
    return await this.createQuestion();
  }
  set setQuizResult(quizResult) {
    this.quizResult = this.getCopyArray(quizResult);
  }
  get getQuizResult() {
    return this.getCopyArray(this.quizResult);
  }
  get getScore() {
    if( !this.quizResult ) return null;
    this.createScore();
    return this.scoreData;
  }
  

  /*** Set Method from Util Service ***/ 
  private getCopyArray(originArray) {
    return this.utilService.getCopyArray(originArray);
  }
  private getRandomPositiveIntWithZero(max) {
    return this.utilService.getRandomPositiveIntWithZero(max);
  }
  private hasInputValueInArray(array, value) {
    return this.utilService.hasInputValueInArray(array, value);
  }

  /*** Private Method ***/
  private async createQuestion():Promise<Question[]> {
    // initial Data
    let wordData = await this.wordDataService.getWordList(this.option.level);
    this.questions = new Array(this.option.number);
    this.questionWords = ( this.questionWords ) ? this.questionWords : this.getRandomWordsData(wordData, this.option.number);
    let fakeAnswers = this.getRandomIcorrectAnswerData(wordData, this.questionWords);

    // TODO: make test code instead of below
    // console.log('wordData', wordData);
    // console.log( 'questions' , this.questions);
    // console.log( 'wordList', this.wordList );
    // console.log( 'fakeAnswers', fakeAnswers );
    // console.log( 'questions.length' , this.questions.length);
    
    // let returnResult = this.getCopyArray(this.questions);

    for( var i=0; i < this.questions.length; i++) {
      // console.log('questions', i+1);
      let answers = this.getCopyArray( fakeAnswers[i] );
      answers.splice( this.getRandomPositiveIntWithZero(answers.length), 0, this.questionWords[i]);
      let question: Question = {
        index: i+1,
        questionWord: this.questionWords[i],
        answers: answers,
        selectedWordIndex: undefined,
        isAnswerCorrect: undefined
      }
      // console.log( 'questions'+i, question );
      this.questions[i] = question;
    }

    // console.log( 'questions', this.questions );
    // let returnResult = this.questions.slice();
    // console.log('returnResult', returnResult);
    // console.log('this.questions', this.questions);
    return this.getCopyArray(this.questions);
  }

  private getRandomWordsData(wordDataRaw: any[], number: number): any[] {
    let wordData = this.getCopyArray(wordDataRaw);
    // Copy array value
    // console.log('getRandomWordsData start-length:', wordData.length);
    let wordArray = [];
    let tempIndex = 0;
    for(var i=0; i < number; i++) {
      // tempIndex = this.getRandomInteger(wordData.length);
      tempIndex = this.getRandomPositiveIntWithZero(wordData.length);
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
          tempIndex = this.getRandomPositiveIntWithZero(wordData.length);
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

  private createScore() {
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
}
