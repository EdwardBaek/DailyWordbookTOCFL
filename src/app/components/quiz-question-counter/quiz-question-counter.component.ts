import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-quiz-question-counter',
  templateUrl: './quiz-question-counter.component.html',
  styleUrls: ['./quiz-question-counter.component.css']
})
export class QuizQuestionCounterComponent implements OnInit {
  count: number = undefined;

  constructor( private timerService: TimerService ) { }

  ngOnInit() {
      this.timerService.count$.subscribe( count => this.count = count );
  }

}
