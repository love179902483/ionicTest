import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticeCardFooterPage } from './notice-card-footer.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeCardFooterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticeCardFooterPage]
})
export class NoticeCardFooterPageModule {}
