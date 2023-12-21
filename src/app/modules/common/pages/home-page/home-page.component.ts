import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {BasePage} from 'src/utilities/bases';
import {News} from "../../../news-center/models/news";
import {NewsService} from "../../../news-center/services/news.service";
import {Device} from "@shared/enums";
import {tap} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BasePage {

  @ViewChild('tVideo') tVideo?: ElementRef<HTMLElement>;

  get scrollTransformStyle() {
    return { transform: `translateX(-${this._scrollTop}px)` };
  }

  videoSrc = 'assets/video/home_pc.mov';
  news: News[] = [];

  readonly cases: string[] = [
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
  ];
  displayCases: string[] = this.cases.concat(this.cases);
  reverseDisplayCases: string[] = [...this.displayCases].reverse();

  private _scrollTop = 0;

  constructor(
    private $news: NewsService,
  ) {
    super();
  }

  protected override onInit(): void {
    this.$news.fetchNews$()
      .subscribe(() => this.news = this.$news.news.slice(0, 3));
    this.$window.device$
      .pipe(
        tap((res) => {
          const video = document.querySelector('video')!;
          video.pause();
          switch (res) {
            case Device.LARGE_DESKTOP:
              this.videoSrc = 'assets/video/home_large_pc.mp4';
              break;
            case Device.Desktop:
              this.videoSrc = 'assets/video/home_pc.mov';
              break;
            case Device.Tablet:
              this.videoSrc = 'assets/video/home_pad.mp4';
              break;
            case Device.Mobile:
              this.videoSrc = 'assets/video/home_mobile.mp4';
              break;
          }
          video.load();
        })
      ).subscribe();
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
