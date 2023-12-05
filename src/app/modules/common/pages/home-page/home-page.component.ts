import { Component, HostListener, OnInit } from '@angular/core';
import { BasePage } from 'src/utilities/bases/base-page';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BasePage {

  get scrollTransformStyle() {
    return { transform: `translateX(-${this.scrollTop}px)` };
  }

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

  readonly successfulCases: string[] = [
    'ntuh',
    'twpower',
    'narlabs',
    'vetern',
    'chiayi_health',
    'carrefour',
    'chengkung_university',
    'cjcu',
    'culture',
    'esun_bank',
    'huafan',
    'kinmen',
    'new_taipei_gov',
    'taipei_city_hospital',
    'taiwan_oil',
  ]
  readonly reverseSuccessfulCases: string[] = [...this.successfulCases].reverse();

  constructor() {
    super();
  }

  @HostListener('wheel', ['$event'])
  onWheelScroll() {
    let scrollTop = document.querySelector('.container')?.scrollTop;
    this.scrollTop = !!scrollTop ? scrollTop : 0;
  }
}
