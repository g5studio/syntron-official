import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-set',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.scss']
})
export class TabSetComponent implements OnInit {
  @Output() currentTab = new EventEmitter<number>();
  @Input() tabs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
