import {
  Directive,
} from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { distinctUntilChanged, filter, map, scan, takeUntil, tap } from "rxjs";
import { formatAbsolutePath } from "../helpers";
import { BaseComponent } from "./base-component";

/**
 * @description 基礎元件
 * @property user 當前使用者資料(須注入user service)
 * @implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy
 */
@Directive()
export class BasePage extends BaseComponent {
  constructor() {
    super();
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e) => formatAbsolutePath((e as NavigationEnd).urlAfterRedirects)),
      distinctUntilChanged(),
      scan((previous, current) => {
        this.$navigation.history.push(previous);
        return current;
      }),
      takeUntil(this.onDestroy$)
    ).subscribe(url => {
      this.$navigation.currentPath = url;
      this.afterRouterChanged(url);
    })
  }
}
