import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCenterRoutingModule } from './news-center-routing.module';
import { NewsDetailPageComponent } from './pages/news-detail-page/news-detail-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    NewsDetailPageComponent,
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NewsCenterRoutingModule
  ]
})
export class NewsCenterModule { }
