import config from '../app.config'
import * as requestHelper from './request-helper';

export default class RequestApiService {
    async getSourcesApi() {
        const newsItems = await requestHelper.get(config.newsApi + `/sources`);
        return newsItems;
    }

    async getNewsApi(chanelCode) {
        const newsItems = await requestHelper.get(config.newsApi + `/articles?source=${chanelCode}&apiKey=${config.apiKey}`);
        return newsItems;
    }
} 