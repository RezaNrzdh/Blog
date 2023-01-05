import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {ArticleModel} from "../models/article.model";

@Injectable()
export class ArticleService {

    constructor(private http: HttpClient ){}

    getArticle = (slug: string): Observable<ArticleModel> => {
        return this.http.get<ArticleModel>('http://localhost:3001/api/v1/articles/once',{
            params: { slug: slug }
        });
    }

    getAllArticles = (lt: number): Observable<object> => {
        return this.http.get('http://localhost:3001/api/v1/articles/all',{
            params: { lt: lt }
        });
    }

    getPopularArticles = ( ): Observable<object> => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/5/popular');
    }
    
}