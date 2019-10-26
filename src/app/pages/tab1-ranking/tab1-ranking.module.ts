import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1RankingPage } from './tab1-ranking.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Tab1RankingActivityComponent } from '../../component/tab1-ranking-activity/tab1-ranking-activity.component'
import { Tab1RankingRecordComponent } from '../../component/tab1-ranking-record/tab1-ranking-record.component'

const routes: Routes = [
  {
    path: '',
    component: Tab1RankingPage,
   
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
  declarations: [Tab1RankingPage, Tab1RankingActivityComponent, Tab1RankingRecordComponent]
})
export class Tab1RankingPageModule {}
