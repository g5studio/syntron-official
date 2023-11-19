import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  readonly news: {date: string, title: string}[] = [
    {
      date: '2014 06 19',
      title: "喬遷快報：伈創資訊要搬家囉！"
    },
    {
      date: '2014 06 19',
      title: "喬遷快報：伈創資訊要搬家囉！"
    },
    {
      date: '2014 06 19',
      title: "喬遷快報：伈創資訊要搬家囉！"
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
