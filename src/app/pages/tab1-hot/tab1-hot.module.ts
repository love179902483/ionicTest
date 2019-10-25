import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1HotPage } from './tab1-hot.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardViewContentComponent } from '../../component/cardview/card-view-content/card-view-content.component'
import { CardViewHeaderComponent } from '../../component/cardview/card-view-header/card-view-header.component'

const routes: Routes = [
  {
    path: '',
    component: Tab1HotPage
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
  declarations: [Tab1HotPage,CardViewContentComponent,CardViewHeaderComponent]
})
export class Tab1HotPageModule {}
