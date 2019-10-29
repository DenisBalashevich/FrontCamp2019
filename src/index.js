import './index.css';
import * as requestHelper from './request-helper';
import * as htmlHelper from './html-Helper';

const API_KEY = '5005357ce12043f1b3fe967be55c8086';
const GET_NEWS_ITEMS = 'https://newsapi.org/v1/articles?source={{CHANEL_CODE}}&apiKey={{YOUR_API_KEY}}'

async function initializeSources() {
    let sources = await requestHelper.get('https://newsapi.org/v1/sources');
    processTable(sources);
}

function processTable(json) {
    let selectElement = document.createElement('select');
    selectElement.addEventListener("change", () => getNews(selectElement));
    for (let i = 0; i < json.sources.length; i++) {
        const item = json.sources[i];
        let option = document.createElement('option');
        option.setAttribute('type', 'button');
        option.setAttribute('value', item.id);
        option.innerText = item.name;
        selectElement.append(option);
    }

    document.getElementById('main').append(selectElement);
}

async function getNews(chanelCode) {
    let url = GET_NEWS_ITEMS.replace('{{CHANEL_CODE}}', chanelCode.value).replace('{{YOUR_API_KEY}}', API_KEY);
    let newsItems = await requestHelper.get(url);
    processNews(newsItems);
}

function processNews(news) {
    let mainDiv = document.createElement('div');
    for (let i = 0; i < news.articles.length; i++) {
        mainDiv.append(processArticle(news.articles[i]))
    }

    document.getElementById('news').innerHTML = "";
    document.getElementById('news').append(mainDiv);
}

function processArticle(article) {
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'article');
    mainDiv.append(htmlHelper.imageElement(article.urlToImage));

    let info = document.createElement('div');
    info.setAttribute('class', 'info-block');
    info.append(htmlHelper.divElement(article.title, [{
        key: "class",
        value: "title"
    }]));

    info.append(htmlHelper.divElement(article.description));

    mainDiv.append(info);
    return mainDiv;
}

window.onload = function () {
    initializeSources();
};
