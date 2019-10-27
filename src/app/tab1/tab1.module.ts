import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

// { path: 'tab1-ranking', loadChildren: './pages/tab1-ranking/tab1-ranking.module#Tab1RankingPageModule' },
// { path: 'tab1-assistance', loadChildren: './pages/tab1-assistance/tab1-assistance.module#Tab1AssistancePageModule' },
// { path: 'tab1-notice', loadChildren: './pages/tab1-notice/tab1-notice.module#Tab1NoticePageModule' },
// { path: 'tab1-task', loadChildren: './pages/tab1-task/tab1-task.module#Tab1TaskPageModule' },

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'hot',
        loadChildren: '../pages/tab1-hot/tab1-hot.module#Tab1HotPageModule'
      },
      {
        path: 'ranking',
        loadChildren: '../pages/tab1-ranking/tab1-ranking.module#Tab1RankingPageModule'
      },
      {
        path: 'assistance',
        loadChildren: '../pages/tab1-assistance/tab1-assistance.module#Tab1AssistancePageModule'
      },
      {
        path: 'classes',
        loadChildren: '../pages/tab1-class/tab1-class.module#Tab1ClassPageModule'
      },
      {
        path: 'task',
        loadChildren: '../pages/tab1-task/tab1-task.module#Tab1TaskPageModule'
      },
      {
        path: 'notice',
        loadChildren: '../pages/tab1-notice/tab1-notice.module#Tab1NoticePageModule'
      },
      {
        path: 'chat',
        loadChildren: '../pages/tab1-chat/tab1-chat.module#Tab1ChatPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'hot',
    pathMatch: 'full'
  }

]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page],
  exports: [RouterModule]
})
export class Tab1PageModule { }
