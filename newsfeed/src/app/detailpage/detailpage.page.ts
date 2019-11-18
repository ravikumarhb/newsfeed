import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Article } from "../network/articles";

@Component({
  selector: "app-detailpage",
  templateUrl: "./detailpage.page.html",
  styleUrls: ["./detailpage.page.scss"]
})
export class DetailpagePage implements OnInit {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;

  @Input() selectedItem: Article;
  itemSelected: any;

  constructor(private router: Router) {
    // this.itemSelected = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.itemSelected = this.router.getCurrentNavigation().extras.state;

    for (const key in this.itemSelected) {
      this.description = this.itemSelected["item"].description;
      this.title = this.itemSelected["item"].title;
      this.urlToImage = this.itemSelected["item"].urlToImage;
      this.content = this.itemSelected["item"].content;
      this.author = this.itemSelected["item"].author;
      this.publishedAt = this.itemSelected["item"].publishedAt;
    }
  }
}
