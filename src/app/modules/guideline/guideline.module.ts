import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelineRoutingModule } from './guideline-routing.module';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    OverviewPageComponent
  ],
    imports: [
        CommonModule,
        GuidelineRoutingModule,
        SharedModule
    ]
})
export class GuidelineModule { }
