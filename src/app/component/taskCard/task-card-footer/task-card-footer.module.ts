import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaskCardFooterPage } from './task-card-footer.page';

const routes: Routes = [
  {
    path: '',
    component: TaskCardFooterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskCardFooterPage]
})
export class TaskCardFooterPageModule {}
