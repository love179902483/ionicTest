import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaskAnswerPage } from './task-answer.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { AnswerCardTopComponent } from '../../component/task-answer-card/answer-card-top/answer-card-top.component';
import { AnswerCardMiddleComponent } from '../../component/task-answer-card/answer-card-middle/answer-card-middle.component';
import { AnswerCardContentComponent } from '../../component/task-answer-card/answer-card-content/answer-card-content.component';


const routes: Routes = [
  {
    path: '',
    component: TaskAnswerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskAnswerPage, AnswerCardTopComponent, AnswerCardMiddleComponent, AnswerCardContentComponent]
})
export class TaskAnswerPageModule {}
