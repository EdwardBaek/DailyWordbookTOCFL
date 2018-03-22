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
  selectedQuestion: Question;
  selectedQuestionIndex: number = 0;
  selectedAnswereIndex: number = 0;
  isReQuiz: boolean = false;
  isChangeCardOn: boolean = false;

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
    console.log('loadReQuiz-questions',this.questions);
    this.selectedQuestion = this.questions[this.selectedQuestionIndex];
  }

  async loadQuiz() {
    this.questions = await this.quizService.getNewQuestions();
    this.selectedQuestion = this.questions[this.selectedQuestionIndex];
    console.log('loadQuiz-questions',this.questions);
  }

  onClickPrevious() {
    this.selectedQuestion = this.questions[--this.selectedQuestionIndex];
  }
  onClickNext() {
    this.isChangeCardOn = true;
    this.setSelectedAnswerIndex();
    this.quizCardComponent.showCheckAnswer();
    setTimeout( ()=>{
      this.selectedQuestion = this.questions[++this.selectedQuestionIndex];
      this.quizCardComponent.hideCheckAnswer();
      this.isChangeCardOn = false;
    }, 1000);
  }
  onClickScore() {
    this.setSelectedAnswerIndex();
    this.quizCardComponent.showCheckAnswer();
    this.quizService.setQuizResult = this.questions;
    setTimeout( ()=> {
      this.router.navigate(['../score'], { relativeTo: this.activatedRoute});
      this.quizCardComponent.hideCheckAnswer();
    }, 1000);
  }

  onClickTestChecker() {
    this.quizCardComponent.showCheckAnswer();
  }
  
  private setSelectedAnswerIndex () {
    this.selectedAnswereIndex = this.quizCardComponent.selectedWordIndex;
    if( !this.selectedAnswereIndex )
      this.selectedAnswereIndex = 0;
    this.questions[this.selectedQuestionIndex].selectedWordIndex = this.selectedAnswereIndex;
  }
  private changeCurrentQuestionInfo(answer: number) {
    this.questions[this.selectedQuestionIndex].selectedWordIndex = answer;
  }
}
