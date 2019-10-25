import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'setting', loadChildren: './new-settings/new-settings.module#NewSettingsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'details',  loadChildren: './pages/tab1-hot/tab1-hot.module#Tab1HotPageModule' },
  { path: 'release', loadChildren: './pages/new-release/new-release.module#NewReleasePageModule' },
  { path: 'tab1-ranking-activity-level', loadChildren: './pages/tab1-ranking-activity-level/tab1-ranking-activity-level.module#Tab1RankingActivityLevelPageModule' },
  { path: 'business-card', loadChildren: './pages/business-card/business-card.module#BusinessCardPageModule' },
  { path: 'notice-card-content', loadChildren: './component/noticeCard/notice-card-content/notice-card-content.module#NoticeCardContentPageModule' },
  { path: 'notice-card-header', loadChildren: './component/noticeCard/notice-card-header/notice-card-header.module#NoticeCardHeaderPageModule' },
  { path: 'notice-card-footer', loadChildren: './component/noticeCard/notice-card-footer/notice-card-footer.module#NoticeCardFooterPageModule' },
  { path: 'assistance-card-footer', loadChildren: './component/assistanceCard/assistance-card-footer/assistance-card-footer.module#AssistanceCardFooterPageModule' },
  { path: 'assistance-card-header', loadChildren: './component/assistanceCard/assistance-card-header/assistance-card-header.module#AssistanceCardHeaderPageModule' },
  { path: 'assistance-card-content', loadChildren: './component/assistanceCard/assistance-card-content/assistance-card-content.module#AssistanceCardContentPageModule' },
    ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//  { path: '', redirectTo: 'login', pathMatch: 'full'},
//  { path: 'details', loadChildren: './pages/tab1-hot/tab1-hot.module#Tab1HotPageModule' },
//  { path: 'tab1-ranking-activity-level', loadChildren: './pages/tab1-ranking-activity-level/tab1-ranking-activity-level.module#Tab1RankingActivityLevelPageModule' },
