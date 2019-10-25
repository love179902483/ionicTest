import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssistanceCardContentPage } from './assistance-card-content.page';

const routes: Routes = [
  {
    path: '',
    component: AssistanceCardContentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssistanceCardContentPage]
})
export class AssistanceCardContentPageModule {}
