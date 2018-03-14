import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSettingComponent } from './quiz-setting.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('QuizSettingComponent', () => {
  let component: QuizSettingComponent;
  let fixture: ComponentFixture<QuizSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSettingComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
