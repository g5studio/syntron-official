import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { Router } from "@angular/router";
import { NavigationService } from "@shared/services";
import { Subject } from "rxjs";
import { AppInjector } from "./app-injector";

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
    this.onInit();
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
   * @description 執行於ngOnInit階段
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
