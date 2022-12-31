import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {

    constructor(private http: HttpClient ){}

    getArticle = (slug: string): Observable<object> => {
        return this.http.get('http://localhost:3001/api/v1/articles/once',{
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