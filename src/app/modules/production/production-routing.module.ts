import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareTabComponent } from './components/tab-pages/care-tab/care-tab.component';
import { CloudTabComponent } from './components/tab-pages/cloud-tab/cloud-tab.component';
import { CallingTabComponent } from './components/tab-pages/calling-tab/calling-tab.component';
import { MedicineTabComponent } from './components/tab-pages/medicine-tab/medicine-tab.component';

const routes: Routes = [
  { path: '', redirectTo: 'care', pathMatch: 'full' },
  { path: 'care', component: CareTabComponent },
  { path: 'medicine', component: MedicineTabComponent },
  { path: 'calling', component: CallingTabComponent },
  { path: 'cloud', component: CloudTabComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
