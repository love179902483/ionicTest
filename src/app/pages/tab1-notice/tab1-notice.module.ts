import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1NoticePage } from './tab1-notice.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NoticeCardHeaderPage } from '../../component/noticeCard/notice-card-header/notice-card-header.page';
import { NoticeCardContentPage } from '../../component/noticeCard/notice-card-content/notice-card-content.page';
import { NoticeCardFooterPage } from '../../component/noticeCard/notice-card-footer/notice-card-footer.page';
const routes: Routes = [
  {
    path: '',
    component: Tab1NoticePage
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
  declarations: [Tab1NoticePage, NoticeCardHeaderPage, NoticeCardContentPage, NoticeCardFooterPage]
})
export class Tab1NoticePageModule {}
