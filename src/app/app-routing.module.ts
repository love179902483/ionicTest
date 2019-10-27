import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
import { NoticeService } from './services/notice.service';

const routes: Routes = [

  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'setting', loadChildren: './new-settings/new-settings.module#NewSettingsPageModule' },
  {
    path: '',

    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  { path: 'details', loadChildren: './pages/tab1-hot/tab1-hot.module#Tab1HotPageModule' },
  { path: 'release', loadChildren: './pages/new-release/new-release.module#NewReleasePageModule' },
  { path: 'tab1-ranking-activity-level', loadChildren: './pages/tab1-ranking-activity-level/tab1-ranking-activity-level.module#Tab1RankingActivityLevelPageModule' },
  { path: 'business-card', loadChildren: './pages/business-card/business-card.module#BusinessCardPageModule' },
  { path: 'task-answer', loadChildren: './pages/task-answer/task-answer.module#TaskAnswerPageModule' },
  {
    path: 'hot-content/:id',
    resolve: {
      data: DataService
    },
    loadChildren: './pages/hot-content/hot-content.module#HotContentPageModule'
  },
  {
    path: 'notice-answer/:id',
    resolve: {
      notice: NoticeService
    },
    loadChildren: './pages/notice-answer/notice-answer.module#NoticeAnswerPageModule'
  },
  { path: 'classes', loadChildren: './pages/tab1-class/tab1-class.module#Tab1ClassPageModule' },
  { path: 'release-test', loadChildren: './pages/release-test/release-test.module#ReleaseTestPageModule' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//  { path: '', redirectTo: 'login', pathMatch: 'full'},
//  { path: 'details', loadChildren: './pages/tab1-hot/tab1-hot.module#Tab1HotPageModule' },
//  { path: 'tab1-ranking-activity-level', loadChildren: './pages/tab1-ranking-activity-level/tab1-ranking-activity-level.module#Tab1RankingActivityLevelPageModule' },
