import { Component, OnInit } from '@angular/core';

import { WordDataService } from '../../services/word-data.service';

import { Word } from '../../models/Word';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  words: Word[];

  constructor(private wordDataService: WordDataService) { }

  ngOnInit(){
    let level = 1;
    this.test(level);
  }

  async test(level: number) {
    let words = await this.wordDataService.getWordList(level);
    this.words = words;
    console.log( words );
  }

}
