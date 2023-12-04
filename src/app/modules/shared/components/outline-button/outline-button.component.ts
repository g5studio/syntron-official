import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.scss']
})
export class OutlineButtonComponent implements OnInit {

  readonly id = `outline-button-${Math.random().toString(36).substring(2)}`;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTextHoverClass(id: string) {
    const element = document.getElementById(id);
    element?.classList.remove('border-primary-4--hover', 'text-primary-4--hover');
  }

  addTextHoverClass(id: string) {
    const element = document.getElementById(id);
    element?.classList.add('border-primary-4--hover', 'text-primary-4--hover');
  }
}
