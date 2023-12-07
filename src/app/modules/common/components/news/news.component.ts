import {Component, Input, OnInit} from '@angular/core';
import {News} from "../../../news-center/models/news";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() news: News[] = [];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  toNewsDetail(id: number) {
    this.router.navigate([`/news-center/news/all/detail/`], {queryParams: {id}}).then();
  }

}
