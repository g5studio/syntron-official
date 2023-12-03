import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(path: string[]) {
    this.isMenuOpen = false;
    this.router.navigate(path).then(() => document.getElementById('main')!.scrollTop = 0);
  }

  getIsFocus(path: string) {
    return window.location.pathname.includes(path);
  }
}
