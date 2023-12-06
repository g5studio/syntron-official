import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './modules/production/production.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'production', pathMatch: 'full'
  },
  {
    path: 'guideline',
    loadChildren: () => import('./modules/guideline/guideline.module').then((m) => m.GuidelineModule)
  },
  {
    path: 'production', component: ProductionComponent,
    loadChildren: () => import('./modules/production/production.module').then(m => m.ProductionModule)
  },
  {
    path: '*',
    redirectTo: 'guideline'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
