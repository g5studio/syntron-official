import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent implements OnInit {

  readonly id = `text-button-${Math.random().toString(36).substring(2)}`;

  constructor() { }

  ngOnInit(): void {
  }

  removeTextHoverClass(id: string) {
    const element = document.getElementById(id);
    element?.classList.remove('text-primary-4--hover');
  }

  addTextHoverClass(id: string) {
    const element = document.getElementById(id);
    element?.classList.add('text-primary-4--hover');
  }
}
