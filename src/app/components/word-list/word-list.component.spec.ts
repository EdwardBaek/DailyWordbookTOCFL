import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListComponent } from './word-list.component';
import { WordDataService } from '../../services/word-data.service';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../../services/util.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { WordCardComponent } from '../word-card/word-card.component';

//TODO: Component Test
xdescribe('WordListComponent', () => {
  let component: WordListComponent;
  let fixture: ComponentFixture<WordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordListComponent ],
      imports: [],
      providers: [ 
        WordDataService, { provide: HttpClient }, { provide: UtilService },
        SettingService,
        WordCardComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});