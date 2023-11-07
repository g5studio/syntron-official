import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'guideline',
  loadChildren: () => import('./modules/guideline/guideline.module').then((m) => m.GuidelineModule)
}, {
  path: '*',
  redirectTo: 'guideline'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
