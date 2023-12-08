import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewsDetailPageComponent} from "./pages/news-detail-page/news-detail-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {
    path: 'news', children: [
      {path: '', component: NewsPageComponent},
      {path: 'all/detail', component: NewsDetailPageComponent},
      {path: 'media/detail', component: NewsDetailPageComponent},
      {path: 'notice/detail', component: NewsDetailPageComponent},
      {path: 'events/detail', component: NewsDetailPageComponent},
      {path: 'new-products/detail', component: NewsDetailPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCenterRoutingModule {
}
