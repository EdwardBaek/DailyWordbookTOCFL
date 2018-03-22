import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Question } from '../../models/Question';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  @Input('question') question: Question;
  selectedWordIndex: number = 0;
  showAnswerChecker: boolean = false;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

  onClickAnswer(selectedWordIndex: number) {
    if(this.selectedWordIndex != selectedWordIndex)
      this.selectedWordIndex = selectedWordIndex;
    else
      this.selectedWordIndex = 0;

    console.log('onClickAnswer : ', this.selectedWordIndex);
  }
  ngOnChanges(changes: SimpleChanges) {
  }

  showCheckAnswer() {
    this.showAnswerChecker = true;
  }
  hideCheckAnswer() {
    this.showAnswerChecker = false;
  }

}
