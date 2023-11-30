import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeSlidesSectionComponent } from './components/layout-sections/fake-slides-section/fake-slides-section.component';
import { CoverSectionComponent } from './components/layout-sections/cover-section/cover-section.component';
import { ProductionComponent } from './production.component';
import { TabSetComponent } from './components/tab-set/tab-set.component';
import { CallingTabComponent } from './components/tab-pages/calling-tab/calling-tab.component';
import { CareTabComponent } from './components/tab-pages/care-tab/care-tab.component';
import { CloudTabComponent } from './components/tab-pages/cloud-tab/cloud-tab.component';
import { MedicineTabComponent } from './components/tab-pages/medicine-tab/medicine-tab.component';
import { ProductionRoutingModule } from './production-routing.module';



@NgModule({
  declarations: [
    ProductionComponent,
    CoverSectionComponent,
    FakeSlidesSectionComponent,
    TabSetComponent,
    CallingTabComponent,
    CareTabComponent,
    CloudTabComponent,
    MedicineTabComponent
  ],
  imports: [
    CommonModule,
    ProductionRoutingModule
  ]
})
export class ProductionModule { }
