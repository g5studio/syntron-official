import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export abstract class UnSubscribeOnDestroy implements OnDestroy {
  constructor() {}

  private onDestroySubject = new Subject<void>();
  public $onDestroy = this.onDestroySubject.asObservable();

  ngOnDestroy(): void {
      this.onDestroy();
      this.onDestroySubject.next();
      this.onDestroySubject.complete();
  }

  protected onDestroy(): void {}
}
