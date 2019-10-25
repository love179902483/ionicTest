import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1RankingActivityLevelPage } from './tab1-ranking-activity-level.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1RankingActivityLevelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1RankingActivityLevelPage]
})
export class Tab1RankingActivityLevelPageModule {}
