import { TestBed, inject } from '@angular/core/testing';

import { WordDataService } from './word-data.service';

import { Word } from '../models/Word';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';  

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

describe('WordDataService', () => {
  let service: WordDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        WordDataService,
        HttpClient
      ]
    });
    service = TestBed.get(WordDataService);
  });

  it('should be created', (() => {
    expect(service).toBeTruthy();
  }));

  // it('test', inject([WordDataService], (service: WordDataService) => {
  //   expect(service).toBeTruthy();
  // }))

});
