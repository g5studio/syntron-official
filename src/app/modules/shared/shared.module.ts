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
import { PillIconComponent } from './components/pill-icon/pill-icon.component';
import { DnsIconComponent } from './components/dns-icon/dns-icon.component';
import { BackupIconComponent } from './components/backup-icon/backup-icon.component';
import { SuccessfulCaseComponent } from './components/successful-case/successful-case.component';
import {MenuIconComponent} from "./components/menu-icon/menu-icon.component";
import {MenuComponent} from "./components/menu/menu.component";
import { MenuMainButtonComponent } from './components/menu-main-button/menu-main-button.component';
import { HeaderSpacingComponent } from './components/header-spacing/header-spacing.component';
import { MenuSubButtonComponent } from './components/menu-sub-button/menu-sub-button.component';
import { AddIconComponent } from './components/add-icon/add-icon.component';
import { ArrowRightIconComponent } from './components/arrow-right-icon/arrow-right-icon.component';
import { RemoveIconComponent } from './components/remove-icon/remove-icon.component';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { ItemPointIconComponent } from './components/item-point-icon/item-point-icon.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ArrowForwardIosIconComponent } from './components/arrow-forward-ios-icon/arrow-forward-ios-icon.component';
import { TabListComponent } from './components/tab-list/tab-list.component';


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
    PillIconComponent,
    DnsIconComponent,
    BackupIconComponent,
    SuccessfulCaseComponent,
    MenuIconComponent,
    MenuComponent,
    MenuMainButtonComponent,
    HeaderSpacingComponent,
    MenuSubButtonComponent,
    AddIconComponent,
    ArrowRightIconComponent,
    RemoveIconComponent,
    CloseIconComponent,
    ItemPointIconComponent,
    BreadcrumbComponent,
    ArrowForwardIosIconComponent,
    TabListComponent,
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
    SuccessfulCaseComponent,
    HeaderSpacingComponent,
    BreadcrumbComponent,
    TabListComponent,
  ]
})
export class SharedModule {
}
