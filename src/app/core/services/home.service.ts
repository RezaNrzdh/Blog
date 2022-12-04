import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient){}

    getEditorPicked = () => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/3/picked');
    }

    getNewestArticle = () => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/5');
    }

    getLatestArticle = () => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/13/latest');
    }

    getPopularArticles = ( ) => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/5/popular');
    }
}