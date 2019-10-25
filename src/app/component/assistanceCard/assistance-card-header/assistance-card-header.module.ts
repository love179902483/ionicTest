import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssistanceCardHeaderPage } from './assistance-card-header.page';

const routes: Routes = [
  {
    path: '',
    component: AssistanceCardHeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssistanceCardHeaderPage]
})
export class AssistanceCardHeaderPageModule {}
