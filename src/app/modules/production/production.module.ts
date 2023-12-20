import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverBlockComponent } from './components/blocks/cover-block/cover-block.component';
import { CallingTabComponent } from './components/tab-pages/calling-tab/calling-tab.component';
import { CareTabComponent } from './components/tab-pages/care-tab/care-tab.component';
import { CloudTabComponent } from './components/tab-pages/cloud-tab/cloud-tab.component';
import { MedicineTabComponent } from './components/tab-pages/medicine-tab/medicine-tab.component';
import { ProductionRoutingModule } from './production-routing.module';
import { FormsModule } from '@angular/forms';
import { AfterImgBlockComponent } from './components/blocks/afterImage-img-block/afterImage-img-block.component';
import { IconCardComponent } from './components/cards/icon-card/icon-card.component';
import { AfterImgWordBlockComponent } from './components/blocks/after-img-word-block/after-img-word-block.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    CoverBlockComponent,
    CallingTabComponent,
    CareTabComponent,
    CloudTabComponent,
    MedicineTabComponent,
    AfterImgBlockComponent,
    IconCardComponent,
    AfterImgWordBlockComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductionRoutingModule,
    FormsModule,
  ]
})
export class ProductionModule { }
