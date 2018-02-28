import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../../models/Word';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})
export class WordCardComponent implements OnInit {
  @Input('word') word: Word;
  @Input('cardType') cardType: number;

  constructor() { }

  ngOnInit() {
    
  }

  private isSimpleCardType() {
    return (this.cardType == 0)
  }
  private isFlipCardType() {
    return (this.cardType == 1)
  }

}
