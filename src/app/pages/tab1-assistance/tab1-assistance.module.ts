import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1AssistancePage } from './tab1-assistance.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AssistanceCardHeaderPage } from '../../component/assistanceCard/assistance-card-header/assistance-card-header.page';
import { AssistanceCardContentPage } from '../../component/assistanceCard/assistance-card-content/assistance-card-content.page';
import { AssistanceCardFooterPage } from '../../component/assistanceCard/assistance-card-footer/assistance-card-footer.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1AssistancePage
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
  declarations: [Tab1AssistancePage, AssistanceCardHeaderPage, AssistanceCardContentPage, AssistanceCardFooterPage]
})
export class Tab1AssistancePageModule {}
