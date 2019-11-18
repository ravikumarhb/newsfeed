import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import {Article} from './network/articles';
import {NewsFeed} from './network/newsfeed';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  newsFeedList: Article[] = [];
  listChanged = new Subject<Article[]>();

  constructor(private httpClient:HttpClient) { }

  getNewsFeed() {
    const params = new HttpParams()
    .set('country', 'us')
    .set('apiKey', '174884bf05a1442eb20f24a00661902f')

     return this.httpClient.get<NewsFeed>('https://newsapi.org/v2/top-headlines', {params})
    .pipe(map(responseData => {
      this.newsFeedList.length = 0;
      for(const article in responseData.articles) {
         var item = responseData.articles[article];
        this.newsFeedList.push(item);
      }
      return this.newsFeedList;
    }))
    .subscribe( respData => {
      console.log(respData);
      this.listChanged.next(respData);
    });

  }
}
