# Architecture : MVP ( model, view, presenter)
UI: Components are HomePage and DetailPage.
Backend: NetworkService is used to fetch data from internet.
Model class : NewsFeed, Article.

Caching: Using PWA or progress web app i.e @angular/pwa.
caching configuration done in dataGroups field of ngsw-config.json
  
Navigation between components is done by Routing.
Data transfer between pages is done using NavController, as there is no parent child relationship.

Observer pattern / rxjs is used to get data from http get call and notify the observer on subsciption.

Property binding, Event binding and string interpolation is used in ts file to update UI, trigger events.




