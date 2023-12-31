import {Injectable} from '@angular/core';
import {INews} from '../interfaces/i-news';
import {HttpClient} from "@angular/common/http";
import {News} from "../models/news";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: News[] = [];

  constructor(
    private $http: HttpClient
  ) {
  }

  fetchNews$() {
    return this.$http.get<Record<string, INews>>('assets/json/news.json')
      .pipe(tap(news => this.news = Object.values(news)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((item, index) => new News(item, index))));
  }
}
