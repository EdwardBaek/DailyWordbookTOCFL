import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { WordCardSettingComponent } from './components/word-card-setting/word-card-setting.component';
import { WordCardComponent } from './components/word-card/word-card.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizSettingComponent } from './components/quiz-setting/quiz-setting.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizScoreComponent } from './components/quiz-score/quiz-score.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { SettingComponent } from './components/setting/setting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Services
import { UtilService } from './services/util.service';
import { WordDataService } from './services/word-data.service';
import { QuizService } from './services/quiz.service';
import { SettingService } from './services/setting.service';
import { MockDataService } from './services/mock-data.service';

// Routing
import { AppRoutingModule } from './app-routing.module';

// For Animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizQuestionCounterComponent } from './components/quiz-question-counter/quiz-question-counter.component';
import { TimerService } from './services/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WordListComponent,
    QuizSettingComponent,
    QuizComponent,
    QuizScoreComponent,
    RecordListComponent,
    SettingComponent,
    NotFoundComponent,
    QuizQuestionComponent,
    WordCardComponent,
    WordCardSettingComponent,
    QuizCardComponent,
    QuizQuestionCounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WordDataService, QuizService, SettingService, MockDataService, UtilService, TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }