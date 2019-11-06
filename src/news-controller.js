import NewsSourceService from './news-source-service';
import NewsSourcesService from './news-sources-service';

export default class NewsController {
    async initializeSources() {
        const newsSourcesService = new NewsSourcesService();
        newsSourcesService.setNewsSources();
    }
    
    async getNewsHandler(chanelCode) {
        const newsSourceService = new NewsSourceService();
        await newsSourceService.setNews(chanelCode);
    }
} 