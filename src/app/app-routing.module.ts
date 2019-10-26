import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from './services/data.service';

const routes: Routes = [
 
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'setting', loadChildren: './new-settings/new-settings.module#NewSettingsPageModule' },
  { 
    path: 'login/:id', 
    resolve: {
      special: DataService
    },
    loadChildren: './pages/login/login.module#LoginPageModule' 
  },
  { path: 'details',  loadChildren: './pages/tab1-hot/tab1-hot.module#Tab1HotPageModule' },
  { path: 'release', loadChildren: './pages/new-release/new-release.module#NewReleasePageModule' },
  { path: 'tab1-ranking-activity-level', loadChildren: './pages/tab1-ranking-activity-level/tab1-ranking-activity-level.module#Tab1RankingActivityLevelPageModule' },
  { path: 'business-card', loadChildren: './pages/business-card/business-card.module#BusinessCardPageModule' },
  { path: 'task-answer', loadChildren: './pages/task-answer/task-answer.module#TaskAnswerPageModule' },
  { path: 'hot-content', loadChildren: './pages/hot-content/hot-content.module#HotContentPageModule' },

    ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//  { path: '', redirectTo: 'login', pathMatch: 'full'},
//  { path: 'details', loadChildren: './pages/tab1-hot/tab1-hot.module#Tab1HotPageModule' },
//  { path: 'tab1-ranking-activity-level', loadChildren: './pages/tab1-ranking-activity-level/tab1-ranking-activity-level.module#Tab1RankingActivityLevelPageModule' },
