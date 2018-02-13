import { TestBed, inject } from '@angular/core/testing';

import { WordDataService } from './word-data.service';

describe('WordDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordDataService]
    });
  });

  it('should be created', inject([WordDataService], (service: WordDataService) => {
    expect(service).toBeTruthy();
  }));
});
