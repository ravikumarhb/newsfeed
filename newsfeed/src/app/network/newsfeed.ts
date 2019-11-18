import { Article } from "./articles";
import { Source } from "./source";

export interface NewsFeed {
  status: string;
  totalResults: number;
  articles: [Article];
}
