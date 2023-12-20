import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "@utilities/bases";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent {

  isMenuOpen = false;

  constructor() {
    super();
  }

  protected override onInit() {
    this.router.events.subscribe(() => this.isMenuOpen = false);
  }

  navigate(path: string) {
    this.isMenuOpen = false;
    this.router.navigateByUrl(path).then();
  }

  getIsFocus(path: string) {
    return window.location.pathname.includes(path);
  }

  contactUs() {
    const main = document.getElementById('main')!;
    main.scrollTop = main.scrollHeight;
  }
}
