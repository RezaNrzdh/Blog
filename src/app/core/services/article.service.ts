import { Injectable } from "@angular/core";
import data from '../../../assets/dummy-data.json';

@Injectable()
export class ArticleService {
    getArticle = () => {
        return data.article;
    }
    getPopularArticles = ( ) => {
        return data.popularArticles;
    }
}