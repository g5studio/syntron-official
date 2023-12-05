import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  Injector,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { NavigationService } from "@shared/services";
import { Subject, distinctUntilChanged, filter, map, scan, takeUntil } from "rxjs";
import { AppInjector } from "./app-injector";
import { formatAbsolutePath } from "../helpers";

/**
 * @description 基礎元件
 * @property user 當前使用者資料(須注入user service)
 * @implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy
 */
@Directive()
export class BaseComponent
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy {

  constructor() {
    const injector = AppInjector.getInjector();
    this.router = injector.get(Router);
    this.$navigation = injector.get(NavigationService);
  }

  public onDestroy$ = new Subject<void>();

  ngOnChanges(changes: SimpleChanges): void {
    this.afterChanged(changes);
  }
  /**
   * @override 覆寫生命週期後便無法使用onInit方法，除特殊需求外優先使用onInit方法
   */
  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e) => formatAbsolutePath((e as NavigationEnd).url)),
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
  ngAfterViewInit(): void { }
  ngAfterContentInit(): void { }
  /**
   * @override 覆寫生命週期後便無法使用onDestroy方法及onDestroy$取消訂閱，除特殊需求外優先使用onDestroy方法
   */
  ngOnDestroy(): void {
    this.unsubAll();
    this.onDestroy();
  }

  protected router: Router;
  protected $navigation: NavigationService;

  /**
   * @description 執行於路徑變動後
   */
  protected afterRouterChanged(url: string): void { }

  /**
   * @description 執行於ngOnChanges階段，account資料的變更由afterAccountChanged處理
   */
  protected afterChanged(changes: SimpleChanges): void { }

  /**
   * @description 執行於ngOnInit階段，若有提供user service則會在拿到user資料後執行
   */
  protected onInit(): void { }
  /**
   * @description 執行於元件摧毀階段
   */
  protected onDestroy() { }

  private unsubAll(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
