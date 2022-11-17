import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import data from "../../../assets/dummy-data.json";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient){}

    getEditorPicked = () => {
        return data.editorPicked;
    }

    getLatestArticle = () => {
        return this.http.get('http://localhost:3001/api/article/limit/5');
    }

    getOtherLatestArticles = () => {
        return data.otherLatestArticles;
    }

    getRecentArticles = () => {
        return data.recentArticles;
    }

    getPopularArticles = ( ) => {
        return data.popularArticles;
    }
}