import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelineRoutingModule } from './guideline-routing.module';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import {SharedModule} from "../shared/shared.module";
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NewsDetailPageComponent } from './pages/news-detail-page/news-detail-page.component';
import { TextLevelUsagePageComponent } from './pages/text-level-usage-page/text-level-usage-page.component';


@NgModule({
  declarations: [
    OverviewPageComponent,
    NewsPageComponent,
    NewsDetailPageComponent,
    TextLevelUsagePageComponent
  ],
    imports: [
        CommonModule,
        GuidelineRoutingModule,
        SharedModule
    ]
})
export class GuidelineModule { }
