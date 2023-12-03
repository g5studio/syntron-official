import {Injectable} from '@angular/core';
import {INews} from '../interfaces/i-news';
import {HttpClient} from "@angular/common/http";
import {News} from "../models/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: News[] = [];

  constructor(
    private $http: HttpClient
  ) {
    this.$http.get<INews>('assets/json/news.json')
      .subscribe(news => this.news = Object.values(news).map((item, index) => new News(item, index)));
  }
}
