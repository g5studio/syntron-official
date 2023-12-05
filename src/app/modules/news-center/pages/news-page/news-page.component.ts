import { Component } from '@angular/core';
import { NewsService } from "../../services/news.service";
import { News } from "../../models/news";
import { BasePage } from 'src/utilities/bases';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent extends BasePage {

  filterNews: News[] = [];
  currentPage: number = 1;

  tabs: string[] = ['全部最新消息', '新聞媒體', '重要通知', '活動通知', '新產品'];
  focusTab: string = '';

  constructor(
    private $news: NewsService,
  ) {
    super();
  }

  protected override onInit(): void {
    this.$news.fetchNews$()
      .subscribe(() => {
        this.filterNews = this.$news.news;
        this.tabs = this.tabs.map((tab) => {
          let length = tab === '全部最新消息' ? this.filterNews.length : this.filterNews.filter((news) => news.category === tab).length;
          return `${tab} (${length})`;
        });
        this.focusTab = this.tabs[0];
      });
  }

  changePage($event: number) {
    this.currentPage = $event;
    document.getElementById('main')!.scrollTop = 0;
  }

  changeTab($event: string) {
    if ($event === this.focusTab) return;
    this.focusTab = $event;
    if ($event.includes('全部最新消息')) this.filterNews = this.$news.news;
    else this.filterNews = this.$news.news.filter((news) => news.category === $event.split(' ')[0]);
    document.getElementById('main')!.scrollTop = 0;
  }

  toDetailPage(id: number) {
    const focusTab = this.focusTab.split(' ')[0];
    let focusTabPath: string = '';
    switch (focusTab) {
      case '全部最新消息':
        focusTabPath = 'all';
        break;
      case '新聞媒體':
        focusTabPath = 'media';
        break;
      case '重要通知':
        focusTabPath = 'notice';
        break;
      case '活動通知':
        focusTabPath = 'events';
        break;
      case '新產品':
        focusTabPath = 'new-products';
    }
    this.router.navigate([`/news-center/news/${focusTabPath}/detail/`], { queryParams: { id } }).then();
  }
}
