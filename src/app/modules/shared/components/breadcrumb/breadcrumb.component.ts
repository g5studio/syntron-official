import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb, BreadcrumbConfig } from '@shared/constants';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  get breadcrumbs(): Breadcrumb[] {
    return BreadcrumbConfig[this.router.url] ?? [];
  }

  get isShow(): boolean {
    return this.breadcrumbs.length > 0;
  }

  constructor(public router: Router) { }

}
