import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {ArticleModel} from "../models/article.model";
import {environment} from "../../../environments/environment";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient){}

    getEditorPicked = (): Observable<object> => {
        return this.http.get(environment.server + 'api/v1/articles/limit/3/picked');
    }

    getNewestArticle = (): Observable<ArticleModel[]> => {
        return this.http.get<ArticleModel[]>(environment.server + 'api/v1/articles/limit/5');
    }

    getLatestArticle = (): Observable<object> => {
        return this.http.get(environment.server + 'api/v1/articles/limit/13/latest');
    }

    getPopularArticles = ( ): Observable<object> => {
        return this.http.get(environment.server + 'api/v1/articles/limit/5/popular');
    }
}