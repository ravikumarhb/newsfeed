import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

import { NetworkService } from "./network.service";
import { NewsFeed } from "./network/newsfeed";
import { Article } from "./network/articles";

describe("NetworkService", () => {
  let httpClient: HttpClient;
  let service: NetworkService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NetworkService]
    });

    service = TestBed.get(NetworkService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: NetworkService = TestBed.get(NetworkService);
    expect(service).toBeTruthy();
  });

  it(" should be able to get news feed items as GET, URL, Response", () => {
    const dummyNews: NewsFeed = {
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

    service.getNewsFeed().subscribe(posts => {
      expect(posts.status).toMatch("ok");
      expect(posts.totalResults).toBe(38);
      expect(posts).toEqual(dummyNews);
    });

    const request = httpMock.expectOne(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=174884bf05a1442eb20f24a00661902f`
    );

    const dummyParams = new HttpParams()
      .set("country", "us")
      .set("apiKey", "174884bf05a1442eb20f24a00661902f");

    expect(request.request.method).toBe("GET");
    expect(request.request.url).toBe(`https://newsapi.org/v2/top-headlines`);
    //expect(request.request.params).toEqual(dummyParams);
    request.flush(dummyNews);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
