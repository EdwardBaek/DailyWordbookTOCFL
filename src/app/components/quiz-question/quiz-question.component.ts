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

  // constructor() { }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService
  ) { }

  async ngOnInit(){
    let option = {
      level: 4,
      number: 5
    }
    await this.quizTest(option);
    
    this.quizService.currentAnswer.subscribe( answer => {
      this.selectedAnswereIndex = answer;
      this.changeCurrentQuestionInfo(this.selectedAnswereIndex);
      console.log('answer - ', answer, this.selectedQuestion);
     } );
  }

  reloadTest() {  
    let option = {
      level: 4,
      number: 5
    }
    this.quizTest(option);
  }

  async quizTest(option) {
    this.questions = await this.quizService.getNewQuestions();
    this.selectedQuestion = this.questions[this.selectedQuestionIndex];
    console.log('questions',this.questions);
  }

  onClickPrevious() {
    this.selectedQuestion = this.questions[--this.selectedQuestionIndex];
  }
  onClickNext() {
    this.setSelectedAnswerIndex();
    this.selectedQuestion = this.questions[++this.selectedQuestionIndex];
  }
  onClickScore() {
    this.setSelectedAnswerIndex();
    this.quizService.setQuizResult = this.questions;

    this.router.navigate(['../score'], { relativeTo: this.activatedRoute});
  }
  private setSelectedAnswerIndex () {
    if( !this.selectedAnswereIndex )
      this.selectedAnswereIndex = 0;
    this.questions[this.selectedQuestionIndex].selectedWordIndex = this.selectedAnswereIndex;
  }
  private changeCurrentQuestionInfo(answer: number) {
    this.questions[this.selectedQuestionIndex].selectedWordIndex = answer;
  }
}
