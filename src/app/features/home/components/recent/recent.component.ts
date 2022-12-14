import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import {ArticleModel} from "../../../../core/models/article.model";

@Component({
    selector: 'home-recent',
    templateUrl: './recent.component.html',
    styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {
    popular: any = [];
    latest: any = [];

    constructor(private homeService: HomeService){}

    ngOnInit(): void {
        this.homeService.getLatestArticle().subscribe( (res:ArticleModel) => {
            this.latest = res;
        });
        
        this.homeService.getPopularArticles().subscribe( (res:ArticleModel) => {
            this.popular = res;
        });
    }
}
