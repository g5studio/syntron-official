import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() navigate = new EventEmitter<string[]>();

  isProductSubmenuOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onNavigate(path: string[]) {
    this.isProductSubmenuOpen = false;
    this.navigate.emit(path);
  }

  getIsFocus(path: string) {
    return window.location.pathname.includes(path);
  }
}
