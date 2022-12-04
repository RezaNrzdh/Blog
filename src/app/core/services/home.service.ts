import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import data from "../../../assets/dummy-data.json";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient){}

    getEditorPicked = () => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/3/picked');
    }

    getNewestArticle = () => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/5');
    }

    getLatestArticle = (from: number, to: number) => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/8/rest');
    }

    getPopularArticles = ( ) => {
        return this.http.get('http://localhost:3001/api/v1/articles/limit/5/popular');
    }
}