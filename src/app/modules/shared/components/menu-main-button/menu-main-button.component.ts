import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-main-button',
  templateUrl: './menu-main-button.component.html',
  styleUrls: ['./menu-main-button.component.scss']
})
export class MenuMainButtonComponent implements OnInit {

  @Input() hasSubmenu = false;

  @Output() changeIsOpenStatus = new EventEmitter<boolean>();

  isOpen = false;
  readonly id = `menu-main-button-${Math.random().toString(36).substring(2)}`;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTextHoverClass(id: string) {
    const element = document.getElementById(id);
    element?.classList.remove('bg-black-7--hover');
  }

  addTextHoverClass(id: string) {
    const element = document.getElementById(id);
    element?.classList.add('bg-black-7--hover');
  }

  onClickBtn() {
    if (this.hasSubmenu) {
      this.isOpen = !this.isOpen;
      this.changeIsOpenStatus.emit(this.isOpen);
    } else {
      // TODO navigate
    }
  }
}
