import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {

  @Input() tabs: string[] = [];
  @Input() focusTabIndex: number = 0;

  readonly id = `tab-list-${Math.random().toString(36).substring(2)}`;

  constructor() { }

  ngOnInit(): void {
  }

  mouseDownChangeClass(id: string, index: number) {
    if (index === this.focusTabIndex) return;
    const tabItemElement = document.getElementById(`${id}_${index}`);
    const tabIconElement = document.getElementById(`${id}_${index}_icon`);
    tabItemElement?.classList.remove('text-black-3--hover');
    tabIconElement?.classList.add('component-tab-list__icon');
  }

  mouseUpChangeClass(id: string, index: number) {
    if (index === this.focusTabIndex) return;
    const tabItemElement = document.getElementById(`${id}_${index}`);
    const tabIconElement = document.getElementById(`${id}_${index}_icon`);
    tabItemElement?.classList.add('text-black-3--hover');
    tabIconElement?.classList.remove('component-tab-list__icon');
  }

}
