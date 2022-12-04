import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import data from '../../../assets/dummy-data.json';

@Injectable()
export class ArticleService {

    constructor(private http: HttpClient ){}

    getArticle = (slug: string) => {
        return this.http.get('http://localhost:3001/api/v1/articles/once',{
            params: { slug: slug }
        });
    }
    getPopularArticles = ( ) => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/5/popular');
    }
    
}