import { LayoutService } from './modules/shared/services/layout.service';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { filter, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/utilities/bases';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'syntron-official';
  @ViewChild('tContainer') container?: ElementRef;
  @HostListener('window:resize', ['$event']) onResize = () => this.$window.detectWindowSize();

  get isProductModule(): boolean {
    return this.$navigation.currentPath.replace(/^\//, '').split('/')[0] === 'production';
  }

  get isHomePage(): boolean {
    return this.$navigation.currentPath.includes('common/home');
  }

  constructor(
    private $layout: LayoutService
  ) {
    super();
  }

  protected override onInit(): void {
    this.$window.scrollTop$.pipe(
      takeUntil(this.onDestroy$),
      filter(() => this.container?.nativeElement),
    ).subscribe(top => this.container!.nativeElement.scrollTop = top);
  }

  public onMainScroll(event: Event): void {
    this.$layout.mainScrollSubject.next(event);
  }
}
