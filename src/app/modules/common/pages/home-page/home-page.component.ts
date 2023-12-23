import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BasePage } from 'src/utilities/bases';
import { News } from "../../../news-center/models/news";
import { NewsService } from "../../../news-center/services/news.service";
import { Device } from "@shared/enums";
import { distinctUntilChanged, takeUntil, tap } from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BasePage {

  @ViewChild('tVideo') tVideo?: ElementRef<HTMLVideoElement>;

  get scrollTransformStyle() {
    return { transform: `translateX(-${this._scrollTop}px)` };
  }

  public videoSrc = 'assets/video/home_pc.mov';
  public news: News[] = [];

  public readonly cases: string[] = [
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
  public displayCases: string[] = this.cases.concat(this.cases);
  public reverseDisplayCases: string[] = [...this.displayCases].reverse();

  private _scrollTop = 0;
  private reloadTimer?: NodeJS.Timeout;
  private videMap: Record<Device, string> = {
    [Device.LARGE_DESKTOP]: 'assets/video/home_large_pc.mp4',
    [Device.Desktop]: 'assets/video/home_pc.mp4',
    [Device.Tablet]: 'assets/video/home_pad.mp4',
    [Device.Mobile]: 'assets/video/home_mobile.mp4',
  }

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
        distinctUntilChanged(),
        takeUntil(this.onDestroy$)
      ).subscribe(device => {
        this.tVideo?.nativeElement.pause();
        this.videoSrc = this.videMap[device];
        if (this.reloadTimer) {
          clearTimeout(this.reloadTimer);
        }
        this.reloadTimer = setTimeout(() => {
          this.tVideo?.nativeElement.load();
        }, 0);
      });
  }

  toNewsDetail(id: number) {
    this.router.navigate([`/news-center/news/all/detail/`], { queryParams: { id } }).then();
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
