import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewsDetailPageComponent} from "./pages/news-detail-page/news-detail-page.component";

const routes: Routes = [
  {
    path: 'news', children: [
      {path: '', component: NewsPageComponent},
      {path: 'detail', component: NewsDetailPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCenterRoutingModule {
}
