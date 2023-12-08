import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb, BreadcrumbConfig } from '@shared/constants';
import { NavigationService } from '@shared/services';
import { BaseComponent } from 'src/utilities/bases';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent extends BaseComponent {

  get breadcrumbs(): Breadcrumb[] {
    return BreadcrumbConfig[this.$navigation.currentPath] ?? [];
  }

  get isShow(): boolean {
    return this.breadcrumbs.length > 0;
  }

  constructor() {
    super();
  }

  public navigate(url: string, index: number) {
    if (index === this.breadcrumbs.length - 1) return;
    this.router.navigateByUrl(url).then();
  }
}
