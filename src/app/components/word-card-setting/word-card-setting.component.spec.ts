import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCardSettingComponent } from './word-card-setting.component';

describe('WordCardSettingComponent', () => {
  let component: WordCardSettingComponent;
  let fixture: ComponentFixture<WordCardSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCardSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCardSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
