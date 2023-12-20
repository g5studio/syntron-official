import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EProductionTab } from '../../shared/enums/production.enum';

export interface ITab {
  title: string;
  value: string;
}
@Component({
  selector: 'app-tab-set',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.scss'],
})
export class TabSetComponent implements OnInit {
  @Output() onTabChange = new EventEmitter<ITab>();
  @Input() tabs: ITab[] = [];

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.currentTab = router.url;
    });
  }

  public currentTab = `/production/${EProductionTab.Care}`;

  ngOnInit(): void {
    this.currentTab = this.router.url;
  }

  public change(tab: ITab) {
    this.currentTab = tab.value;
    this.onTabChange.emit(tab);
  }
}
