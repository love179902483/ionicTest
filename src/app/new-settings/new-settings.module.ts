import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewSettingsPage } from './new-settings.page';

import { CardViewHeaderComponent } from '../component/cardview/card-view-header/card-view-header.component'
import { CardViewContentComponent } from '../component/cardview/card-view-content/card-view-content.component'


import { TaskCardHeaderPage } from '../component/taskCard/task-card-header/task-card-header.page'
import { TaskCardContentPage } from '../component/taskCard/task-card-content/task-card-content.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: NewSettingsPage,
    children: [
      {
        path: 'test',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      }
    ]
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
  declarations: [NewSettingsPage, 
    CardViewHeaderComponent, CardViewContentComponent,
    TaskCardHeaderPage, TaskCardContentPage]
})
export class NewSettingsPageModule {}
