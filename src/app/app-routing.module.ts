import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './modules/production/production.component';

const routes: Routes = [{
  path: 'guideline',
  loadChildren: () => import('./modules/guideline/guideline.module').then((m) => m.GuidelineModule)
}, {
  path: '',
  redirectTo: 'common',
  pathMatch: 'full'
}, {
  path: 'common',
  loadChildren: () => import('./modules/common/common.module').then((m) => m.CommonModule)
}, {
  path: 'news-center',
  loadChildren: () => import('./modules/news-center/news-center.module').then((m) => m.NewsCenterModule)
}, {
  path: 'production', component: ProductionComponent,
  loadChildren: () => import('./modules/production/production.module').then(m => m.ProductionModule)
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
