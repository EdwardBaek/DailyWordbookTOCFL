import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    console.log( 'quizService.getQuizResult', this.quizService.getQuizResult );
  }

}
