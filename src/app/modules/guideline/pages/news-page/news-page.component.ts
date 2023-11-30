import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  readonly breadcrumbs: string[] = ['首頁', '最新消息'];
  readonly tabs: string[] = ['全部最新消息 (38)', '新聞媒體 (10)', '重要通知 (10)', '活動通知 (10)', '新產品 (2)'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
