import './index.css';
import NewsController from './news-controller';

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
    const newsController = new NewsController();
    newsController.initializeSources();
};
