import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";
import { ActivatedRoute, Router } from "@angular/router";
import { News } from "../../models/news";
import {BasePage} from "../../../../../utilities/bases";

@Component({
  selector: 'app-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.scss']
})
export class NewsDetailPageComponent extends BasePage {

  news: News | null = null;
  total: number = 0;

  constructor(
    private $news: NewsService,
    private route: ActivatedRoute,
  ) {
    super();
  }

  protected override onInit(): void {
    const id = this.route.snapshot.queryParams['id'];
    this.$news.fetchNews$().subscribe(() => {
      this.news = new News(this.$news.news[id], +id);
      this.total = Object.values(this.$news.news).length;
    });
  }

  changePage(id: number) {
    const category = this.route.snapshot.url[0].path;
    this.router.navigate(['news-center', 'news', category, 'detail'], { queryParams: { id } })
      .then(() => {
        this.news = new News(this.$news.news[id], id);
        this.$window.scrollTo(0);
      });
  }

  backToNewsPage() {
    this.router.navigate(['news-center', 'news']).then();
  }
}
