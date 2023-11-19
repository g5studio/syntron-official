import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BorderlessButtonComponent} from './components/borderless-button/borderless-button.component';
import {MainLogoComponent} from './components/main-logo/main-logo.component';
import {NewsComponent} from './components/news/news.component';
import {
  ArrowForwardIconComponent
} from "./components/arrow-forward-icon/arrow-forward-icon.component";
import {TextButtonComponent} from './components/text-button/text-button.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HealthcareIconComponent } from './components/healthcare-icon/healthcare-icon.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BorderlessButtonComponent,
    MainLogoComponent,
    NewsComponent,
    ArrowForwardIconComponent,
    TextButtonComponent,
    ProductCardComponent,
    HealthcareIconComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BorderlessButtonComponent,
    NewsComponent,
    TextButtonComponent,
    ArrowForwardIconComponent,
    ProductCardComponent,
  ]
})
export class SharedModule {
}
