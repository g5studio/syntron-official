import { Component } from '@angular/core';
import { LayoutService } from './modules/shared/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'syntron-official';

  constructor(
    private $layout: LayoutService
  ) {}

  public onMainScroll(event: Event): void {
    this.$layout.mainScrollSubject.next(event);
  }
}
