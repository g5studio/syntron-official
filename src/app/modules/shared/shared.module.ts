import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoverSectionComponent } from '../production/components/layout-sections/cover-section/cover-section.component';
import { FakeSlidesSectionComponent } from '../production/components/layout-sections/fake-slides-section/fake-slides-section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
