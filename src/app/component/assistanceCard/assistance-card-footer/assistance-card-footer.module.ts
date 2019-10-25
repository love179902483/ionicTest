import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssistanceCardFooterPage } from './assistance-card-footer.page';

const routes: Routes = [
  {
    path: '',
    component: AssistanceCardFooterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssistanceCardFooterPage]
})
export class AssistanceCardFooterPageModule {}
