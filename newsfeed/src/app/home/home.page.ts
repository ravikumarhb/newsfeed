import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkService} from '../network.service'
import { Article} from '../network/articles'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newsFeedList : Article[];

  constructor(private networkService: NetworkService, private router: Router) {}

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.networkService.getNewsFeed();
    this.networkService.listChanged.subscribe(newsList =>  {
     this.newsFeedList = newsList;
    });
  }

  onClick(itemSelected: Article){ 
    this.router.navigateByUrl('/detailpage', { state: { item: itemSelected }} );
  }

}
