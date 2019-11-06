import RequestApiService from './request-api-service';
import NewsSourceService from './news-source-service';
import NewsController from './news-controller';

export default class NewsSourcesService {
    constructor(){
        this.newsSourceService = new NewsSourceService();
        this.requestApiService = new RequestApiService();
    }
    
    async setNewsSources() {
        const response = await this.requestApiService.getSourcesApi();
        this.setNewsSourcesToDocument(response.sources);
    }

    setNewsSourcesToDocument(sources) {
        let selectElement = this.setSelectElement();
        for (let i = 0; i < sources.length; i++) {
            let option = this.setOptionElement(sources[i]);
            selectElement.append(option);
        }

        document.getElementById('main').append(selectElement);
    }

    setSelectElement() {
        let selectElement = document.createElement('select');
        const connector = new NewsController();
        selectElement.addEventListener("change", () => connector.getNewsHandler(selectElement));
        return selectElement;
    }

    setOptionElement(source) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('type', 'button');
        optionElement.setAttribute('value', source.id);
        optionElement.innerText = source.name;
        return optionElement;
    }
} 