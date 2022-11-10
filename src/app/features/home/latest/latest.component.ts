import { Component, OnInit } from "@angular/core";
import { HomeService } from 'src/app/core/services/home.service';

import { LatestArticle } from 'src/app/core/models/latestArticle.model';
import { OtherLastetArticles } from 'src/app/core/models/otherLatestArticles.model';

@Component({
    selector: 'home-latest',
    templateUrl: './latest.component.html',
    styleUrls: ['./latest.component.scss']

})
export class LatestComponent implements OnInit {
    latestArticle: LatestArticle = { img: '', title: '', desc: '', authorImg: '', author: '', duration: '', created: '' };
    otherLatestArticles: Array<OtherLastetArticles> = [];

    constructor(private homeService: HomeService){}
    
    ngOnInit(): void {
        this.latestArticle = this.homeService.getLatestArticle();
        this.otherLatestArticles = this.homeService.getOtherLatestArticles();
    }   
}