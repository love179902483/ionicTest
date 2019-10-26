import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1ChatPage } from './tab1-chat.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TampingCardHeaderComponent } from '../../component/tamping-card/tamping-card-header/tamping-card-header.component';
import { TampingCardContentComponent } from '../../component/tamping-card/tamping-card-content/tamping-card-content.component';
import { TampingCardFooterComponent } from '../../component/tamping-card/tamping-card-footer/tamping-card-footer.component';

import { TampingCardLeftComponent } from '../../component/tamping-card/tamping-card-left/tamping-card-left.component';
import { TampingCardRightComponent } from '../../component/tamping-card/tamping-card-right/tamping-card-right.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1ChatPage
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
  declarations: [Tab1ChatPage, 
    TampingCardHeaderComponent, TampingCardContentComponent, TampingCardFooterComponent,
    TampingCardLeftComponent, TampingCardRightComponent]
})
export class Tab1ChatPageModule {}
