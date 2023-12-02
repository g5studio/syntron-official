import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { NewsPageComponent } from "./pages/news-page/news-page.component";
import { NewsDetailPageComponent } from "./pages/news-detail-page/news-detail-page.component";
import { GuidelineGuardGuard } from './guideline.guard';
import { TextLevelUsagePageComponent } from './pages/text-level-usage-page/text-level-usage-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuidelineGuardGuard],
    children: [
      { path: 'home', component: OverviewPageComponent },
      { path: 'news', component: NewsPageComponent },
      { path: 'news/detail', component: NewsDetailPageComponent },
      { path: 'text-level', component: TextLevelUsagePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelineRoutingModule { }
