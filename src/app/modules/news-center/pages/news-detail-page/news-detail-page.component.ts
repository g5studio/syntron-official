import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {ActivatedRoute, Router} from "@angular/router";
import {News} from "../../models/news";

@Component({
  selector: 'app-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.scss']
})
export class NewsDetailPageComponent implements OnInit {

  news: News | null = null;
  total: number = 0;

  constructor(
    private $news: NewsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams['id'];
    this.$news.fetchNews$().subscribe((news) => {
      this.news = new News(news[id], +id);
      this.total = Object.values(news).length;
    });
  }

  changePage(id: number) {
    const category = this.route.snapshot.url[0].path;
    this.router.navigate(['news-center', 'news', category, 'detail'], {queryParams: {id}})
      .then(()=> {
        this.news = new News(this.$news.news[id], id);
        document.getElementById('main')!.scrollTop = 0;
      });
  }

  backToNewsPage() {
    this.router.navigate(['news-center', 'news']).then();
  }
}
