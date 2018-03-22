import { Component, OnInit, ViewChild } from '@angular/core';
import { Word } from '../../models/Word';
import { Question } from '../../models/Question';
import { QuizService } from '../../services/quiz.service';
import { QuizCardComponent } from '../quiz-card/quiz-card.component';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizScoreComponent } from '../quiz-score/quiz-score.component';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
  styles: [`
    .target { background-color: lightgray; }
  `]
})
export class QuizQuestionComponent implements OnInit {
  words: Word[];
  questions: Question[] = [];

  isReQuiz: boolean = false;
  selectedQuestion: Question;
  selectedQuestionIndex: number = 0;
  selectedAnswereIndex: number = 0;

  isSelectedAnswerCorrect: boolean = false;
  isChangeCardOn: boolean = false;

  isCheckAnswer: boolean = false;

  @ViewChild(QuizCardComponent) quizCardComponent : QuizCardComponent;

  // constructor() { }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService
  ) { 
    this.activatedRoute.parent.params.subscribe(params => {
      console.log('params', params);
      if( params.type == 're' )
        this.isReQuiz = true;
    });
  }

  async ngOnInit(){
    if ( this.isReQuiz ) {
      this.loadReQuiz();
    } else {
      await this.loadQuiz();
    }
  }

  loadReQuiz() {
    this.questions = this.quizService.getQuestions;
    this.selectedQuestion = this.questions[this.selectedQuestionIndex];
  }

  async loadQuiz() {
    this.questions = await this.quizService.getNewQuestions();
    this.selectedQuestion = this.questions[this.selectedQuestionIndex];
  }

  onClickNext() {
    this.isChangeCardOn = true;
    this.isCheckAnswer = true;
    this.setSelectedAnswerIndex();
    this.setIsAnswerCorrect();
    this.quizCardComponent.showCheckAnswer();
    console.log( 'this.isSelectedAnswerCorrect', this.isSelectedAnswerCorrect );

    setTimeout( ()=>{
      this.resetStatusAndSelectedData();
      this.quizCardComponent.resetData();
      this.selectedQuestion = this.questions[++this.selectedQuestionIndex];
      console.log( 'this.isSelectedAnswerCorrect', this.isSelectedAnswerCorrect );
    }, 1000);
  }

  resetStatusAndSelectedData() {
    this.isChangeCardOn = false;
    this.isCheckAnswer = false;
    this.isSelectedAnswerCorrect = false;

  }

  onClickScore() {
    this.isCheckAnswer = true;
    this.setSelectedAnswerIndex();
    this.setIsAnswerCorrect();
    this.quizCardComponent.showCheckAnswer();
    this.quizService.setQuizResult = this.questions;
    setTimeout( ()=> {
      this.router.navigate(['../score'], { relativeTo: this.activatedRoute});
      this.quizCardComponent.hideCheckAnswer();
      this.isCheckAnswer = false;
    }, 1000);
  }


  private setSelectedAnswerIndex () {
    this.selectedAnswereIndex = this.quizCardComponent.selectedWordIndex;
    if( !this.selectedAnswereIndex )
      this.selectedAnswereIndex = 0;
    this.questions[this.selectedQuestionIndex].selectedWordIndex = this.selectedAnswereIndex;
  }
  private setIsAnswerCorrect() {
    this.isSelectedAnswerCorrect = this.quizCardComponent.isSelectedAnswerCorrect;
    this.questions[this.selectedQuestionIndex].isAnswerCorrect = this.isSelectedAnswerCorrect;
  }
  private changeCurrentQuestionInfo(answer: number) {
    this.questions[this.selectedQuestionIndex].selectedWordIndex = answer;
  }
}
