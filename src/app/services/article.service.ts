import { Injectable } from "@angular/core";
import data from '../../assets/dummy-data.json';

@Injectable({ providedIn: 'root' })
export class ArticleService {
    getArticle = () => {
        return data.article;
    }
    getPopularArticles = ( ) => {
        return data.popularArticles;
    }
}