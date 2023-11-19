import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  scrollTop = 0;
  readonly news: { date: string, title: string }[] = [
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

  get scrollTransformStyle() {
    return {transform: `translateX(-${this.scrollTop}px)`};
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('wheel', ['$event'])
  onWheelScroll() {
    let scrollTop = document.querySelector('.overview-page')?.scrollTop;
    this.scrollTop = !!scrollTop ? scrollTop : 0;
  }
}
