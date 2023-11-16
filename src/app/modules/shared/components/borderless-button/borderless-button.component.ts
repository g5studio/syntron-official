import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-borderless-button',
  templateUrl: './borderless-button.component.html',
  styleUrls: ['./borderless-button.component.scss']
})
export class BorderlessButtonComponent implements OnInit {

  readonly id = Math.random().toString(36).substring(2);

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTextHoverClass(id: string) {
    const element = document.getElementById(id);
    element?.classList.remove('text-primary-3--hover');
  }

  addTextHoverClass(id: string) {
    const element = document.getElementById(id);
    element?.classList.add('text-primary-3--hover');
  }

}
