import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-borderless-button',
  templateUrl: './borderless-button.component.html',
  styleUrls: ['./borderless-button.component.scss']
})
export class BorderlessButtonComponent implements OnInit {

  @Input() isFocus: boolean = false;

  readonly id = `borderless-button-${Math.random().toString(36).substring(2)}`;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTextHoverClass(id: string) {
    if (this.isFocus) return;
    const element = document.getElementById(id);
    element?.classList.remove('text-primary-3--hover');
  }

  addTextHoverClass(id: string) {
    if (this.isFocus) return;
    const element = document.getElementById(id);
    element?.classList.add('text-primary-3--hover');
  }

}
