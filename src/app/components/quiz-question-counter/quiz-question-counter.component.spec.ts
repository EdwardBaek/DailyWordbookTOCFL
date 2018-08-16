import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionCounterComponent } from './quiz-question-counter.component';

describe('QuizQuestionCounterComponent', () => {
  let component: QuizQuestionCounterComponent;
  let fixture: ComponentFixture<QuizQuestionCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizQuestionCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
