import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaskCardHeaderPage } from './task-card-header.page';
import { FontAwesomeModule } from '@fortawesome//angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: TaskCardHeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TaskCardHeaderPage]
})
export class TaskCardHeaderPageModule {}
