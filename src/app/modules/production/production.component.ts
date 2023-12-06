import { Component, OnInit } from '@angular/core';
import { ITab } from './components/tab-set/tab-set.component';
import { Router } from '@angular/router';
import { EProductionTab } from './shared/enums/production.enum';
@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  public tabs: ITab[] = [{
    title: '照護服務',
    value: `/production/${EProductionTab.Care}`,
  },{
    title: '藥品管理',
    value: `/production/${EProductionTab.Medicine}`,
  },{
    title: '叫號系統',
    value: `/production/${EProductionTab.Calling}`,
  },{
    title: '雲端儲存',
    value: `/production/${EProductionTab.Cloud}`,
  },
]

  ngOnInit(): void {

  }

}
