import RequestApiService from './request-api-service';
import NewsArticleService from './news-article-service';

export default class NewsSourcesService {
    constructor() {
        this.requestApiService = new RequestApiService();
        this.newsArticleService = new NewsArticleService();
    }

    async setNews(chanelCode) {
        let newsItems = await this.requestApiService.getNewsApi(chanelCode.value);
        this.setNewsToDocument(newsItems.articles);
    }

    setNewsToDocument(articles) {
        let mainDiv = document.createElement('div');
        for (let i = 0; i < articles.length; i++) {
            mainDiv.append(this.newsArticleService.setArticle(articles[i]))
        }

        document.getElementById('news').innerHTML = "";
        document.getElementById('news').append(mainDiv);
    }
} 