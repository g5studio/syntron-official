import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverBlockComponent } from './components/blocks/cover-block/cover-block.component';
import { ProductionComponent } from './production.component';
import { TabSetComponent } from './components/tab-set/tab-set.component';
import { CallingTabComponent } from './components/tab-pages/calling-tab/calling-tab.component';
import { CareTabComponent } from './components/tab-pages/care-tab/care-tab.component';
import { CloudTabComponent } from './components/tab-pages/cloud-tab/cloud-tab.component';
import { MedicineTabComponent } from './components/tab-pages/medicine-tab/medicine-tab.component';
import { ProductionRoutingModule } from './production-routing.module';
import { FormsModule } from '@angular/forms';
import { ArrowDropUpIconComponent } from '../shared/components/arrow-drop-up-icon/arrow-drop-up-icon.component';
import { AfterImgBlockComponent } from './components/blocks/afterImage-img-block/afterImage-img-block.component';



@NgModule({
  declarations: [
    ProductionComponent,
    CoverBlockComponent,
    TabSetComponent,
    CallingTabComponent,
    CareTabComponent,
    CloudTabComponent,
    MedicineTabComponent,
    ArrowDropUpIconComponent,
    AfterImgBlockComponent,
  ],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    FormsModule,
  ]
})
export class ProductionModule { }
