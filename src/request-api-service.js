import config from '../app.config'
import * as requestHelper from './request-helper';
import * as traceService from './trace-method-call';

export default class RequestApiService {
    constructor() {
        this.tracedObj = traceService.traceMethodCalls(requestHelper.requestHelper);
    }
    async getSourcesApi() {
        const newsItems = await this.tracedObj.get(config.newsApi + `/sources`);
        return newsItems;
    }

    async getNewsApi(chanelCode) {
        const newsItems = await this.tracedObj.get(config.newsApi + `/articles?source=${chanelCode}&apiKey=${config.apiKey}`);
        return newsItems;
    }
} 