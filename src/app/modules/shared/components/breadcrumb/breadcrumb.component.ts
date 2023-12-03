import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Breadcrumb, BreadcrumbConfig} from '@shared/constants';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  get breadcrumbs(): Breadcrumb[] {
    return BreadcrumbConfig[window.location.pathname] ?? [];
  }

  get isShow(): boolean {
    return this.breadcrumbs.length > 0;
  }

  constructor(public router: Router) {
  }

  navigate(url: string, index: number) {
    if (index === this.breadcrumbs.length - 1) return;
    this.router.navigateByUrl(url).then();
  }
}
