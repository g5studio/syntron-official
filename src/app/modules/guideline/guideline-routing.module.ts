import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewsDetailPageComponent} from "./pages/news-detail-page/news-detail-page.component";

const routes: Routes = [
  { path: 'home', component: OverviewPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'news/detail', component: NewsDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelineRoutingModule { }
