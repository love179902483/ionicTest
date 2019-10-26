import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotContentPage } from './hot-content.page';

import { HotContentCardHeaderComponent } from '../../component/hotContentCard/hot-content-card-header/hot-content-card-header.component';
import { HotContentCardContentComponent } from '../../component/hotContentCard/hot-content-card-content/hot-content-card-content.component';
import { HotContentCardFooterComponent } from '../../component/hotContentCard/hot-content-card-footer/hot-content-card-footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: HotContentPage
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
  declarations: [HotContentPage, HotContentCardHeaderComponent, HotContentCardContentComponent, HotContentCardFooterComponent]
})
export class HotContentPageModule {}
