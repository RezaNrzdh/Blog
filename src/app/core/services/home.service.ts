import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import data from "../../../assets/dummy-data.json";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient){}

    getEditorPicked = () => {
        return this.http.get('http://localhost:3001/api/v1/article/limit/3/picked',);
    }

    getLatestArticle = (limit: number) => {
        return this.http.get('http://localhost:3001/api/v1/article/limit/5',{
            params: { limit }
        });
    }

    getOtherArticles = (from: number, to: number) => {
        return this.http.get('http://localhost:3001/api/v1/article/limit/8/rest',{
            params: { from, to }
        });
    }

    getPopularArticles = ( ) => {
        return this.http.get('http://localhost:3001/api/v1/article/limit/5/popular');
    }
}