import { TestBed, inject } from '@angular/core/testing';
import { WordDataService } from './word-data.service';
import { QuizService } from './quiz.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UtilService } from './util.service';
import { MockWordDataService } from './testing/mock.word-data.service';
import { MockDataService } from './mock-data.service';
import { Question } from '../models/Question';

describe('QuizService', () => {
  let mockDataService: MockDataService = new MockDataService();
  let mockWordDataService: MockWordDataService = new MockWordDataService(mockDataService);
  let service: QuizService;

  beforeEach(() => {
    mockDataService = new MockDataService();
    mockWordDataService = new MockWordDataService(mockDataService);

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        QuizService,
        UtilService,
        { provide: WordDataService, useValue: mockWordDataService },
      ]
    });

    service = TestBed.get(QuizService);
  });

  describe('MockWordDataService', () => {

    it('should be created', (() => {
      expect(service).toBeTruthy();
      expect(service).toBeDefined();
    }));

    describe('#getWordList', () => {
      it('could get correct data', () => {
        let level = 1; // defaul is 1
        expect(mockWordDataService.selectedLevel).toEqual(level);
        
        level = 2;
        mockWordDataService.getWordList(level);
        expect(mockWordDataService.selectedLevel).toEqual(level);
        
        level = 3;
        expect(mockWordDataService.getWordList(level)).not.toBeUndefined();
        expect(mockWordDataService.getWordList(level).length).toBe(20, 'Mock data has 20 items for each level');
        expect(mockWordDataService.selectedLevel).toEqual(level);
      });
    });
  });

  /***  ***/
  /*
    QuizService Work Flow
    1.(Optional) setOption
    2. getNewQuestions
    3. setQuizResult
    4. getScore
    5. (Optional) getReQuestions -> 3. setQuizResult
   */
  describe('QuizService with MockWordDataService', () => {
    
    it('should have default value', async () => {
      const option = {
        level: 1,
        number: 5
      };
      expect(service.getOption).toBeDefined();
      expect(service.getQuestionWords).toBeUndefined('should be null before set');
      expect(service.getQuizResult).toBeNull('should be null before set');
      expect(service.getScore).toBeNull('should be null before set');
      expect(service.getOption).toEqual(option);
    });

    describe('#set/getOption', () => {
      it('should get correct data', () => {
        const option = {
          level: 2,
          number: 10
        };
        service.setOption = option;
        expect( service.getOption ).toBe(option);
      });
    });

    describe('#getNewQuestions', ()=> {
      it('should get correct data', async () => {
        let returnedValue = await service.getNewQuestions();
        expect(returnedValue.length).not.toBeUndefined();
        expect(returnedValue.length).toBe(5,'as default value');
      });
  
      it('should call resetData() in getNewQuestions()', () => {
        spyOn(service, "resetData");
        service.getNewQuestions();
        expect(service.resetData).toHaveBeenCalled();
      });

      it('should get diffent Questions on every call', async () => {
        spyOn(service, 'getNewQuestions').and.callThrough();
        let returnedValue = await service.getNewQuestions();
        expect(service.getNewQuestions()).not.toEqual(returnedValue);
        expect(service.getNewQuestions()).not.toEqual(returnedValue);
        expect(service.getNewQuestions()).not.toEqual(returnedValue);
        expect(service.getNewQuestions()).not.toEqual(returnedValue);
        expect(service.getNewQuestions).toHaveBeenCalledTimes(5);
        expect(service.getNewQuestions).not.toHaveBeenCalledTimes(10);
      });
  
      it('should have diffent Question Words after call', async () => {
        spyOn(service, 'getNewQuestions').and.callThrough();
        let returnedValue = await service.getNewQuestions();
        let questionWord = service.getQuestionWords;
        expect(service.getNewQuestions()).not.toEqual(returnedValue);
        expect(questionWord).not.toEqual(service.getQuestionWords);
        
        expect(service.getNewQuestions()).not.toEqual(returnedValue);
        expect(questionWord).not.toEqual(service.getQuestionWords);
        
        expect(service.getNewQuestions()).not.toEqual(returnedValue);
        expect(questionWord).not.toEqual(service.getQuestionWords);
        
        expect(service.getNewQuestions()).not.toEqual(returnedValue);
        expect(questionWord).not.toEqual(service.getQuestionWords);
        
        expect(service.getNewQuestions).toHaveBeenCalledTimes(5);
        expect(service.getNewQuestions).not.toHaveBeenCalledTimes(10);
      });
    });
    // End #getNewQuestions

    describe('#getReQuestions', () => {
      it('should get correct data', async () => {
        let returnedValue = await service.getReQuestions();
        expect(returnedValue.length).not.toBeUndefined();
        expect(returnedValue.length).toBe(5,'as default value');
      });
    
      it('should not call resetData()', () => {
        spyOn(service, "resetData");
        service.getReQuestions();
        expect(service.resetData).not.toHaveBeenCalled();
      });
  
      it('should get different Questions on every time', async () => {
        spyOn(service, 'getReQuestions').and.callThrough();
        let returnedValue = await service.getReQuestions();
        expect(service.getReQuestions()).not.toEqual(returnedValue);
        expect(service.getReQuestions()).not.toEqual(returnedValue);
        expect(service.getReQuestions()).not.toEqual(returnedValue);
        expect(service.getReQuestions()).not.toEqual(returnedValue);
        expect(service.getReQuestions).toHaveBeenCalledTimes(5);
        expect(service.getReQuestions).not.toHaveBeenCalledTimes(10);
      });
  
      it('should have the same Question Word after call', async () => {
        spyOn(service, 'getReQuestions').and.callThrough();
        let returnedValue = await service.getReQuestions();
        let questionWord = service.getQuestionWords;
        expect(service.getReQuestions()).not.toEqual(returnedValue);
        expect(questionWord).toEqual(service.getQuestionWords);
        
        expect(service.getReQuestions()).not.toEqual(returnedValue);
        expect(questionWord).toEqual(service.getQuestionWords);
        
        expect(service.getReQuestions()).not.toEqual(returnedValue);
        expect(questionWord).toEqual(service.getQuestionWords);
        
        expect(service.getReQuestions()).not.toEqual(returnedValue);
        expect(questionWord).toEqual(service.getQuestionWords);
        
        expect(service.getReQuestions).toHaveBeenCalledTimes(5);
        expect(service.getReQuestions).not.toHaveBeenCalledTimes(10);
      });

    });
    // End #getReQuestions

    describe('#set/getResult', () => {
      it('should get correct data', () => {
        const quizResult = mockDataService.getMockQuizResult;
  
        service.setQuizResult = quizResult;
        expect( service.getQuizResult ).toEqual(quizResult);
      });
    });
    describe('#getScore', () => {
      it('should get data after call of setResult/set result data', ()=>{
        let score;
        let mockScoreData = mockDataService.getMockQuizScore;
        let now = new Date();

        expect(service.getScore).toBeNull();
        service.setQuizResult = mockDataService.getMockQuizResult;
        expect(service.getScore).not.toBeNull();

        // Quiz Score has time data, therefore set the same time both set/get data.
        score = service.getScore;
        score.date = now.toString();
        mockScoreData.date = now.toString();
        expect(score).toEqual(mockScoreData);
      });

      it('', ()=>{});
    });

  });
  // End QuizService with MockWordDataService

});
