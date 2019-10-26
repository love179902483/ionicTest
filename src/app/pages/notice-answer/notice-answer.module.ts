import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticeAnswerPage } from './notice-answer.page';

import { NoticeAnswerCardTopComponent } from '../../component/notice-answer-card/notice-answer-card-top/notice-answer-card-top.component';
import { NoticeAnswerCardMiddleComponent } from '../../component/notice-answer-card/notice-answer-card-middle/notice-answer-card-middle.component';
import { NoticeAnswerCardFooterComponent } from '../../component/notice-answer-card/notice-answer-card-footer/notice-answer-card-footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  {
    path: '',
    component: NoticeAnswerPage
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
  declarations: [NoticeAnswerPage, NoticeAnswerCardTopComponent, NoticeAnswerCardMiddleComponent, NoticeAnswerCardFooterComponent]
})
export class NoticeAnswerPageModule {}
