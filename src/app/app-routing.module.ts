import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './modules/production/production.component';

const routes: Routes = [{
  path: 'guideline',
  loadChildren: () => import('./modules/guideline/guideline.module').then((m) => m.GuidelineModule)
}, {
  path: '*',
  redirectTo: 'guideline'
}, {
  path: 'production', component: ProductionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
