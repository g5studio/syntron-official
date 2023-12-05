import {Component, HostListener, OnInit} from '@angular/core';
import {News} from "../../../news-center/models/news";
import {NewsService} from "../../../news-center/services/news.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  get scrollTransformStyle() {
    return {transform: `translateX(-${this.scrollTop}px)`};
  }

  scrollTop = 0;
  news: News[] = [];

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

  constructor(
    private $news: NewsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.$news.fetchNews$()
      .subscribe(() => this.news = this.$news.news.slice(0,3));
  }

  @HostListener('wheel', ['$event'])
  onWheelScroll() {
    let scrollTop = document.querySelector('.container')?.scrollTop;
    this.scrollTop = !!scrollTop ? scrollTop : 0;
  }
}
