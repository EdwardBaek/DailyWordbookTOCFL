import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../services/quiz.service';

import { LEVELS, LEVEL, QUESTION_COUNT } from '../../models/Types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-setting',
  templateUrl: './quiz-setting.component.html',
  styleUrls: ['./quiz-setting.component.css']
})
export class QuizSettingComponent implements OnInit {
  LEVELS;
  QUESTION_COUNT;
  selectedLevel: number = LEVEL.LEVEL_1;
  selectedQuizNumber: number = 5;
  quizOption = {
    level: this.selectedLevel,
    number: this.selectedQuizNumber
  };

  constructor(
    private quizService: QuizService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.LEVELS = LEVELS;
    this.QUESTION_COUNT = QUESTION_COUNT;
  }

  ngOnInit() {
  }

  private setLevel(level) { 
    this.selectedLevel = level;
    this.setQuizOption();
  }
  private setQuizNumber(number: number) {
    this.selectedQuizNumber = number;
    this.setQuizOption();
  }
  private setQuizOption() {
    this.quizOption = {
      level: this.selectedLevel,
      number: this.selectedQuizNumber
    };
    this.quizService.setOption = this.quizOption;
  }
  private goQuiz() {
    this.setQuizOption();
    this.router.navigate([
      '../question'], { relativeTo: this.activatedRoute });
  }
}
