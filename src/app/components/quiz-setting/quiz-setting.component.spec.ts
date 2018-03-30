import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSettingComponent } from './quiz-setting.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WordDataService } from '../../services/word-data.service';
import { Router, ActivatedRoute } from '@angular/router';

//TODO: Component Test
xdescribe('QuizSettingComponent', () => {
  let component: QuizSettingComponent;
  let fixture: ComponentFixture<QuizSettingComponent>;
  let quizServiceStub: Partial<QuizService>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['url']);
  const quizServiceSpy = jasmine.createSpyObj('QuizService', ['getTest']);

  quizServiceStub = {
    getTest(text:string): string {
      return text;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSettingComponent ],
      imports: [  ],
      providers: [ 
        // Test Double(Use Mock)
        { provide: QuizService,   useValue: quizServiceStub },
        { provide: Router,        useValue: routerSpy},
        { provide: ActivatedRoute,useValue: activatedRouteSpy}
      ],
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
