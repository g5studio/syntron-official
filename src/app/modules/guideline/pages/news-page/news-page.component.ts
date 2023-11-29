import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  readonly breadcrumbs: string[] = ['首頁', '最新消息'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
