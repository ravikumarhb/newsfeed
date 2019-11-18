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

  // @Input() selectedItem: Article;

  itemSelected: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.itemSelected = this.router.getCurrentNavigation().extras.state;
    this.description = this.itemSelected["item"].description;
    this.title = this.itemSelected["item"].title;
    this.urlToImage = this.itemSelected["item"].urlToImage;
    this.content = this.itemSelected["item"].content;
    this.author = this.itemSelected["item"].author;
    this.publishedAt = this.itemSelected["item"].publishedAt;
  }
}
