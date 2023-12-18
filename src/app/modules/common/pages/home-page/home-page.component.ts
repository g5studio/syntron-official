import { Component, HostListener } from '@angular/core';
import { BasePage } from 'src/utilities/bases';
import {News} from "../../../news-center/models/news";
import {NewsService} from "../../../news-center/services/news.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BasePage {

  get scrollTransformStyle() {
    return { transform: `translateX(-${this._scrollTop}px)` };
  }

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

  private _scrollTop = 0;


  constructor(
    private $news: NewsService,
  ) {
    super();
  }

  protected override onInit(): void {
    this.$news.fetchNews$()
      .subscribe(() => this.news = this.$news.news.slice(0, 3));
  }

  toNewsDetail(id: number) {
    this.router.navigate([`/news-center/news/all/detail/`], {queryParams: {id}}).then();
  }

  toNewsCenter() {
    this.router.navigate(['/news-center/news']).then();
  }

  toProduct(path: string) {
    this.router.navigate([`/production/${path}`]).then();
  }

  @HostListener('wheel', ['$event'])
  onWheelScroll() {
    let scrollTop = document.querySelector('.container')?.scrollTop;
    this._scrollTop = !!scrollTop ? scrollTop : 0;
  }
}
