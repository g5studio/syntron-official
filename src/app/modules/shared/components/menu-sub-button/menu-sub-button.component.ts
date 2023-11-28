import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sub-button',
  templateUrl: './menu-sub-button.component.html',
  styleUrls: ['./menu-sub-button.component.scss']
})
export class MenuSubButtonComponent implements OnInit {

  readonly id = `menu-sub-button-${Math.random().toString(36).substring(2)}`;

  constructor() { }

  ngOnInit(): void {
  }

}
