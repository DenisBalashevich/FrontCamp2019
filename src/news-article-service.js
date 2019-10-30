import * as htmlHelper from './html-Helper';

export default class NewsArticleService {
    setArticle(article) {
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
} 