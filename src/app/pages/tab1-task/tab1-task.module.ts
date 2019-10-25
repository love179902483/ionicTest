import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1TaskPage } from './tab1-task.page';

import { TaskCardHeaderPage } from '../../component/taskCard/task-card-header/task-card-header.page';
import { TaskCardContentPage } from '../../component/taskCard/task-card-content/task-card-content.page';
import { TaskCardFooterPage } from '../../component/taskCard/task-card-footer/task-card-footer.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  {
    path: '',
    component: Tab1TaskPage
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
  declarations: [Tab1TaskPage, TaskCardHeaderPage, TaskCardContentPage, TaskCardFooterPage]
})
export class Tab1TaskPageModule {}
