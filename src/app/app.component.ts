import { Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor() {
    super();
  }

  protected override onInit(): void {
    this.$window.scrollTop$.pipe(
      takeUntil(this.onDestroy$),
      filter(() => this.container?.nativeElement),
    ).subscribe(top => this.container!.nativeElement.scrollTop = top);
  }
}
