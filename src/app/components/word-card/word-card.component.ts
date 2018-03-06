import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../../models/Word';
import { CARD_TYPE } from '../../models/Types';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})

export class WordCardComponent implements OnInit {
  @Input('word') word: Word;
  @Input('cardType') selectedCardType: number;
  
  CARD_TYPE;
  
  constructor() { 
    this.CARD_TYPE = CARD_TYPE;
  }

  ngOnInit() {
  }
}
