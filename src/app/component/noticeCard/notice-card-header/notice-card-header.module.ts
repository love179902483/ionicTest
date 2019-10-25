import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticeCardHeaderPage } from './notice-card-header.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeCardHeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticeCardHeaderPage]
})
export class NoticeCardHeaderPageModule {}
