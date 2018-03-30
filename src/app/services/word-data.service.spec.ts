import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from'@angular/common/http/testing';
import { WordDataService } from './word-data.service';

import { Word } from '../models/Word';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';  
import { async } from 'q';
import { UtilService } from './util.service';

import { MockWordDataService } from './testing/mock.word-data.service';
import { MockDataService } from './mock-data.service';

export class Data {
  name : string;
}

describe('WordDataService', () => {
  let service: WordDataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ 
        WordDataService, { provide : UtilService },
      ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(WordDataService);
  });

  it('should be created', (() => {
    expect(service).toBeTruthy();
  }));

  it('can test HttpClient.get', () => {
    const expectedData: Data = {name: 'Test Data'};
    // const testUrl: string = "https://dailywordbook.firebaseapp.com/assets/data/level1.json";
    const testUrl: string = "https://jsonplaceholder.typicode.com/posts";
    
    // const testUrl: string = service.getTestUrl(1);
    
    // Make an HTTP GET request
    httpClient.get<Data>(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(expectedData, 'should return expected data'), fail
      );
      
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testUrl);
  
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
  
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(expectedData);
  
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('can use method getWordList in it', () => {
    let level: number = 2;
    expect(service.getWordList(level)).toBeTruthy();
  });
  
});

describe('MockWordDataService', () => {
  let service: MockWordDataService;
  let mockDataService: MockDataService = new MockDataService();

  let spy: any;
  
  beforeEach(() => {
    service = new MockWordDataService(mockDataService);
  });

  it('should be created', (() => {
    expect(service).toBeTruthy();
  }));

  it('can use method in it', (() => {
    //TODO
  }));
  
});


