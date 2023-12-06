import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.scss']
})
export class NewsDetailPageComponent implements OnInit {

  readonly breadcrumbs: string[] = ['首頁', '最新消息', '全部最新消息'];

  constructor() { }

  ngOnInit(): void {
  }

}
