import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { QuizSettingComponent } from './components/quiz-setting/quiz-setting.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizScoreComponent } from './components/quiz-score/quiz-score.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { SettingComponent } from './components/setting/setting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quiz/:type', component: QuizComponent,
    children: [
      {path: '', redirectTo: 'setting', pathMatch: 'full'},
      {path: 'setting', component: QuizSettingComponent},
      {path: 'question', component: QuizQuestionComponent},
      {path: 'score', component: QuizScoreComponent}
    ]
  },
  {path: 'words', component: WordListComponent},
  {path: 'records', component: RecordListComponent},
  {path: 'setting', component: SettingComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [
      RouterModule.forRoot(routes)
    ],
    declarations: [],
    providers: []
  })
  export class AppRoutingModule { }