import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Question } from '../models/Question';
import { WordDataService } from '../services/word-data.service';
import { forEach } from '@angular/router/src/utils/collection';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

@Injectable()
export class QuizService {
  leftWords: Word[];
  questions: Question[];
  wordList: Word[];
  fakeAnswers: any[];
  quizResult: Question[];
  scoreData: any = {
    socre: 0,
    totalWords:  5,
    level: 1,
    date: 'date',
    correctAnsweredWords : [],
    incorrectAnsweredWords : []
  };
  // Quiz onWorking Data
  selectedAnswerWordIndex: number;

  private currentAnswerSource = new BehaviorSubject<number>(0);
  currentAnswer = this.currentAnswerSource.asObservable();

  // Set Defualt value
  option: any = {
    level: 1,
    number: 5
  };


  constructor(private wordDataService: WordDataService) {
    console.log('>>>quizService is initailized.');
  }
  
  changeAnswer(answer: number) {
    this.currentAnswerSource.next(answer);
  }

  resetData() {
    this.questions = [];
    this.wordList = [];
    this.fakeAnswers = [];
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
  
  set setSelectedAnswerWordIndex(selectedAnswerWordIndex: number) {
    this.selectedAnswerWordIndex = selectedAnswerWordIndex;
  }
  get getSelectedAnswerWordIndex() {
    return this.selectedAnswerWordIndex;
  }
  
  get getQuestions() {
    this.changeAnswer(0);
    return this.getCopyArray(this.questions);
  }
  async getNewQuestions() {
    this.changeAnswer(0);
    return this.getNewQuestionsWithOption(this.option);
  }

  async getNewQuestionsWithOption(option:{level:number, number:number}):Promise<Question[]> {
    if(!option) option = this.option;
    this.resetData();
    // initial Data
    let wordData = await this.wordDataService.getWordList(option.level);
    this.questions = new Array(option.number);
    this.wordList = this.getRandomWordsData(wordData, option.number);
    this.fakeAnswers = this.getRandomIcorrectAnswerData(wordData, this.wordList);
    // console.log('wordData',wordData);
    // console.log( 'answers', answers );
    // console.log( 'incorrectAnswers', incorrectAnswers );
    // console.log( 'questions' , questions);
    // console.log( 'questions.length' , questions.length);

    for( var i=0; i < this.questions.length; i++) {
      // console.log('questions', i+1);
      let question: Question = {
        index: i+1,
        questionWord: this.wordList[i],
        answers: this.fakeAnswers[i]
      }
      // console.log( 'questions'+i, question );
      this.questions[i] = question;
    }

    // console.log( 'questions', questions );
    // let returnResult = this.questions.slice();
    // console.log('returnResult', returnResult);
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

    this.quizResult.forEach( (cur, inx) => {
      if ( cur.isAnswerCorrect != undefined ){
        if( cur.isAnswerCorrect == true ){
          score++;
          correctArray.push(cur.questionWord);
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
      tempArray.splice(this.getRandomInteger(answerNum-1), 0, cur);
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
    // let cloned = originArray ? originArray.slice() : null;
    let cloned = originArray.map(x => Object.assign({}, x));
    return cloned;
  }

}
