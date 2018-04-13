import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Question } from '../models/Question';
import { Score } from '../models/Score';
import { Option } from '../models/Option';
import { WordDataService } from '../services/word-data.service';
import { forEach } from '@angular/router/src/utils/collection';
import { UtilService } from './util.service';

@Injectable()
export class QuizService {
  private option: Option
  private questions: Question[];
  private questionWords: Word[];
  private quizResult: Question[];
  private scoreData: Score;

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
      score: 0,
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
    // Word data is simple array, therefore swallow copy is enough
    return this.utilService.getCopyArray(originArray);
  }
  private getRandomPositiveIntWithZero(max) {
    return this.utilService.getRandomInt(0, max);
  }
  private hasInputValueInArray(array, value) {
    return this.utilService.hasInputValueInArray(array, value);
  }

  /*** Private Method ***/
  // TODO: think and find testing with jasmine Private Methods
  private async createQuestion():Promise<Question[]> {
    // initial Data
    let wordData = await this.wordDataService.getWordList(this.option.level);
    this.questions = new Array(this.option.number);
    this.questionWords = ( this.questionWords ) ? this.questionWords : this.getRandomWordsData(wordData, this.option.number);
    let fakeAnswers = this.getRandomAnswerData(wordData, this.questionWords);

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

  private getRandomAnswerData(wordDataRaw: any[], answer: any[]) :any[] {
    const inccorectAnswerNum = 3;
    let returnArray = answer.map( answer => {
      let wordData = this.getCopyArray(wordDataRaw);
      //XXX: exception if wordData length is under inccorectAnswerNum
      //      after adding my word list feature, above situation could be happened.

      let incorrectAnswerArray = new Array(inccorectAnswerNum).fill(undefined);

      return incorrectAnswerArray.map( () => {
        let tempIndex;
        let incorrectAnswer;
        let tries = 0;
        do{
          tempIndex = Math.floor(Math.random()*wordData.length);
          incorrectAnswer = wordData[tempIndex];
          tries ++;
        } while( tries < 100 && (
              answer === incorrectAnswer || 
              incorrectAnswerArray.findIndex( answer => answer === incorrectAnswer) !== -1
            ) )
        wordData.splice(tempIndex, 1);
        return incorrectAnswer;
      })
    });

    return returnArray;
  }

  private createScore() {
    let score: number = 0;
    let correctArray: any[] = [];
    let incorrectArray: any[] = [];

    // console.log( this.quizResult);
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
