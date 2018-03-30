import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCardSettingComponent } from './word-card-setting.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//TODO: Component Test
xdescribe('WordCardSettingComponent', () => {
  let component: WordCardSettingComponent;
  let fixture: ComponentFixture<WordCardSettingComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCardSettingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
