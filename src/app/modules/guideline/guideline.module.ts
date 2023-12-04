import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelineRoutingModule } from './guideline-routing.module';
import { SharedModule } from "../shared/shared.module";
import { TextLevelUsagePageComponent } from './pages/text-level-usage-page/text-level-usage-page.component';


@NgModule({
  declarations: [
    TextLevelUsagePageComponent
  ],
  imports: [
    CommonModule,
    GuidelineRoutingModule,
    SharedModule
  ]
})
export class GuidelineModule { }
