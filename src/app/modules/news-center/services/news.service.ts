import { Injectable } from '@angular/core';
import { INews } from '../interfaces/i-news';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: INews[] = [];

  constructor(
    private $http: HttpClient
  ) {
    this.$http.get<INews>('assets/json/news.json').subscribe(news => this.news = Object.values(news));
  }
}
