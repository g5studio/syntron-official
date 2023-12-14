import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { CommonRoutingModule } from './common-routing.module';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutUsPageComponent
  ],
  imports: [
    CommonRoutingModule,
    SharedModule,
    AngularCommonModule,
    SharedModule
  ]
})
export class CommonModule { }
