import { Component, OnInit } from '@angular/core';
import { Word } from '../../models/Word';
import { Question } from '../../models/Question';
import { WordDataService } from '../../services/word-data.service';
import { QuizService } from '../../services/quiz.service';

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
  // constructor() { }
  constructor(
    private wordDataService: WordDataService,
    private quizService: QuizService
  ) { }

  ngOnInit(){
    let level = 1;
    // this.test(level); 

    let option = {
      level: 1,
      number: 20
    }
    this.quizTest(option);
  }

  reloadTest() {  
    let level = 1;
    // this.test(level); 

    let option = {
      level: 1,
      number: 20
    }
    this.quizTest(option);
  }

  // async test(level: number) {
  //   let words = await this.wordDataService.getWordList(level);
  //   this.words = words;
  //   console.log( words );
  // }

  async quizTest(option) {
    
    this.questions = await this.quizService.getNewQuestions(option);
    console.log('questions',this.questions);
  }
}
