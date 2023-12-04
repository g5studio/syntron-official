import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuidelineGuardGuard} from './guideline.guard';
import {TextLevelUsagePageComponent} from './pages/text-level-usage-page/text-level-usage-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuidelineGuardGuard],
    children: [
      {path: 'text-level', component: TextLevelUsagePageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelineRoutingModule {
}
