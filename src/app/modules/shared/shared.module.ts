import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BorderlessButtonComponent } from './components/borderless-button/borderless-button.component';
import { MainLogoComponent } from './components/main-logo/main-logo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BorderlessButtonComponent,
    MainLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BorderlessButtonComponent
  ]
})
export class SharedModule { }
