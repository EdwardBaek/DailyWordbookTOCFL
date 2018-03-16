import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../../models/Word';
import { CARD_TYPE } from '../../models/Types';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css'],
  animations: [
    trigger('showAndHide', [
      state('unclicked',  style({opacity: '0'})),
      state('clicked',    style({opacity: '*'})),
      transition('clicked <=> unclicked', animate('0.5s ease-in-out')),
    ]),
    trigger('flip', [
      state('unclicked',  style({transform: 'rotateY(0deg)'})),
      state('clicked',    style({transform: 'rotateY(180deg)'})),
      // FIXME: If below transition is on, flipping two times on back to front side on FireFox.
      // transition('clicked <=> unclicked', animate('0.5s ease-in-out')),
    ]),
  ]
})

export class WordCardComponent implements OnInit {
  @Input('word') word: Word;
  @Input('cardType') selectedCardType: number;
  cardClickState: string = 'unclicked';
  flipped: boolean = false;

  CARD_TYPE;
  
  constructor() { 
    this.CARD_TYPE = CARD_TYPE;
  }

  ngOnInit() {
  }
  onCardClick() {
    this.cardClickState = (this.cardClickState == 'clicked') ? 'unclicked' : 'clicked';
    this.flipped = ( this.cardClickState == 'clicked' ) ? true : false
    console.log('this.cardClickState',this.cardClickState);
  }
}
