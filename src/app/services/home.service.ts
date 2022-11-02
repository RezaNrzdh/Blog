import { Injectable } from "@angular/core";
import data from "../../assets/dummy-data.json";

@Injectable({ providedIn: 'root' })
export class HomeService {
    getEditorPicked = () => {
        return data.editorPicked;
    }

    getLatestArticle = () => {
        return data.latestArticle;
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