import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { MockDataService } from '../../services/mock-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent implements OnInit {
  quizScore;

  constructor(
    private quizService: QuizService,
    private mockDataService: MockDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // If there is no data, display MockData
    if( !this.quizService.getQuizResult )
      this.quizScore = this.mockDataService.getMockQuizScore;
    else
      this.quizScore = this.quizService.getScore;
  }

  /*** Private Method ***/
  private goReQuiz() {
    this.router.navigate([
      '../../re/question'], { relativeTo: this.activatedRoute });
  }
  
}
