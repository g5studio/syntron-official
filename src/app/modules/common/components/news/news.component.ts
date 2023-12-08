import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  readonly news: {date: string, title: string}[] = [
    {
      date: '2014 06 19',
      title: "新北企業觔斗雲二代 伈創資訊推出雲端應用黃金陣容"
    },
    {
      date: '2014 06 19',
      title: "新北企業觔斗 伈創資訊推出雲端應用黃金陣容"
    },
    {
      date: '2014 06 19',
      title: "新北企業觔斗雲二代 伈創資訊推出雲端應用黃金陣容"
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
