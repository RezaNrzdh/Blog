import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import data from "../../../assets/dummy-data.json";

@Injectable()
export class HomeService {

    constructor(private http: HttpClient){}

    getEditorPicked = () => {
        return this.http.get('http://localhost:3001/api/article/picked/3',);
    }

    getLatestArticle = () => {
        return this.http.get('http://localhost:3001/api/article/limit/5',{
            params: {}
        });
    }

    getOtherArticles = (from: number, to: number) => {
        return this.http.get('http://localhost:3001/api/article/others/other',{
            params: { from, to }
        });
    }

    getPopularArticles = ( ) => {
        return this.http.get('http://localhost:3001/api/article/popular/5');
    }
}