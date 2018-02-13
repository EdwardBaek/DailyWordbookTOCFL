import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSettingComponent } from './quiz-setting.component';

describe('QuizSettingComponent', () => {
  let component: QuizSettingComponent;
  let fixture: ComponentFixture<QuizSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSettingComponent ]
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
