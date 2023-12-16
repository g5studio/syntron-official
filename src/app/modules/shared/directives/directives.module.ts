import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveViewportDirective } from './responsive-viewport.directive';



@NgModule({
  declarations: [
    ResponsiveViewportDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveViewportDirective
  ]
})
export class DirectivesModule { }
