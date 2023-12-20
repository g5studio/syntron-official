import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EProductionTab } from '../../../production/shared/enums/production.enum';

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

  public tabs: ITab[] = [{
    title: '照護服務',
    value: `/production/${EProductionTab.Care}`,
  }, {
    title: '藥品管理',
    value: `/production/${EProductionTab.Medicine}`,
  }, {
    title: '叫號系統',
    value: `/production/${EProductionTab.Calling}`,
  }, {
    title: '雲端儲存',
    value: `/production/${EProductionTab.Cloud}`,
  },
  ]

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
