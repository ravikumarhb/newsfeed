import { async, ComponentFixture, TestBed, tick } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { HomePage } from "./home.page";
import { Page } from "@ionic/core";
import { NetworkService } from "../network.service";
import { DebugElement } from "@angular/core";
import { of } from "rxjs";
import { NewsFeed } from "../network/newsfeed";

describe("HomePage", () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let page: Page;
  let networkService: NetworkService;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [NetworkService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    networkService = TestBed.get(NetworkService);
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have title as News Feed", () => {
    expect(component["title"]).toEqual("News Feed");
  });

  it("should display news list", () => {
    // spyOn(networkService, "getNewsFeed").and.callThrough();
    // expect(networkService.getNewsFeed).toHaveBeenCalled();
    //expect(component.newsFeedList.length).toBeGreaterThan(0);

    const newsFeed: NewsFeed = {
      status: "ok",
      totalResults: 38,
      articles: [
        {
          author: "Hollie Silverman, CNN",
          content: "(CNN)At least 10 people were shot",
          description: "At least ten people were shot fatally",
          publishedAt: "2019-11-18T08:12:00Z",
          source: { id: "cnn", name: "CNN" },
          title:
            "At least 10 people were shot and 4 of them were killed at a football watch party in Fresno - CNN",
          url:
            "https://www.cnn.com/2019/11/18/us/fresno-mass-shooting-football-party/index.html",
          urlToImage:
            "https://cdn.cnn.com/cnnnext/dam/assets/191118002350-02-fresno-shooting-1118-super-tease.jpg"
        }
      ]
    };

    const nwService = jasmine.createSpyObj("NetworkService", ["getNewsFeed"]);
    const getNewsFeedSpy = nwService.getNewsFeed.and.returnValue(of(newsFeed));
    fixture.detectChanges();
    //expect(component.newsFeed.status).toBe("ok");
  });
});
