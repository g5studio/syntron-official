import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelineRoutingModule } from './guideline-routing.module';
import { HomePageComponent } from '../common/pages/home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import { NewsPageComponent } from '../news-center/pages/news-page/news-page.component';
import { NewsDetailPageComponent } from '../news-center/pages/news-detail-page/news-detail-page.component';
import { TextLevelUsagePageComponent } from './pages/text-level-usage-page/text-level-usage-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
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
