import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Question } from '../../models/Question';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  // Mock Data
  // question: Question = {
  //   index: 0,
  //   questionWord: {index: 11, word:'Test', explain:'test'},
  //   answers: [{index: 12, word:'What', explain:'is this?'},{index: 11, word:'Test', explain:'test'}]
  // };
  // @Output() onVoted = new EventEmitter<boolean>();
  @Input('question') question: Question;
  selectedWordIndex: number = 0;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

  onClickAnswer(selectedWordIndex: number) {
    if(this.selectedWordIndex != selectedWordIndex)
      this.selectedWordIndex = selectedWordIndex;
    else
      this.selectedWordIndex = 0;

      console.log('onClickAnswer : ', this.selectedWordIndex);
      this.quizService.changeAnswer(this.selectedWordIndex);
  }
  ngOnChanges(changes: SimpleChanges) {
    // if( !changes.question.firstChange ){
    //   let question: Question = changes.question.currentValue;
    //   if( !question.selectedWordIndex ){
    //     this.selectedWordIndex = question.questionWord.index;
    //   }
    // }
    // this.quizService.setSelectedAnswerWordIndex = this.selectedWordIndex;
    if( changes.question.currentValue.selectedWordIndex) {
      this.selectedWordIndex = changes.question.currentValue.selectedWordIndex;
      console.log('ngOnChanges- : ', changes.question.currentValue);
    }
  }

}
