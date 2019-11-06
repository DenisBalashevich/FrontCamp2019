import * as htmlHelper from './html-Helper';
import ElementBuilder from './element-builder';

export default class NewsArticleService {
    setArticle(article) {
        let info = new ElementBuilder('div')
        .addAttribute('class', 'info-block')
        .appendElement(htmlHelper.divElement(article.title, [{
            key: "class",
            value: "title"
        }]))
        .appendElement(htmlHelper.divElement(article.description));

        let mainDiv = new ElementBuilder('div')
        .addAttribute('class', 'article')
        .appendElement(htmlHelper.imageElement(article.urlToImage))
        .appendElement(info.element);

        return mainDiv.element;
    }
} 