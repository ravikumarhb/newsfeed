import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NetworkService } from "../network.service";
import { Article } from "../network/articles";
import { NewsFeed } from "../network/newsfeed";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  newsFeedList: Article[];
  newsFeed: NewsFeed;
  title = "News Feed";

  constructor(private networkService: NetworkService, private router: Router) {}

  ionViewWillEnter() {
    this.networkService.getNewsFeed().subscribe(newsList => {
      this.newsFeed = newsList;
      this.newsFeedList = this.newsFeed.articles;
    });
  }

  onClick(itemSelected: Article) {
    this.router.navigateByUrl("/detailpage", { state: { item: itemSelected } });
  }
}
