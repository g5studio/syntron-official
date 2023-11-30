import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ProductionComponent } from './modules/production/production.component';
import { CareTabComponent } from './modules/production/components/tab-pages/care-tab/care-tab.component';
import { MedicineTabComponent } from './modules/production/components/tab-pages/medicine-tab/medicine-tab.component';
import { CallingTabComponent } from './modules/production/components/tab-pages/calling-tab/calling-tab.component';
import { CloudTabComponent } from './modules/production/components/tab-pages/cloud-tab/cloud-tab.component';
import { TabSetComponent } from './modules/production/components/tab-set/tab-set.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
