import './index.css';
import NewsSourceService from './news-source-service';
import NewsSourcesService from './news-sources-service';

async function initializeSources() {
    const newsSourcesService = new NewsSourcesService();
    newsSourcesService.setNewsSources();
}

export async function getNewsHandler(chanelCode) {
    const newsSourceService = new NewsSourceService();
    await newsSourceService.setNews(chanelCode);
}

function addHTMLElements(){
    let mainDiv  = document.createElement('div');
    mainDiv.setAttribute('id', 'main');

    let newsDiv  = document.createElement('div');
    newsDiv.setAttribute('id', 'news');
    document.getElementsByTagName('body')[0].append(mainDiv);
    document.getElementById('main').after(newsDiv);
}

window.onload = function () {
    addHTMLElements();
    initializeSources();
};
