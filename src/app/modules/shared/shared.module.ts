import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BorderlessButtonComponent } from './components/borderless-button/borderless-button.component';
import { MainLogoComponent } from './components/main-logo/main-logo.component';
import { NewsComponent } from './components/news/news.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BorderlessButtonComponent,
    MainLogoComponent,
    NewsComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BorderlessButtonComponent,
    NewsComponent
  ]
})
export class SharedModule { }
