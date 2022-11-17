import { Component, OnInit } from "@angular/core";
import { HomeService } from 'src/app/core/services/home.service';

import { OtherLastetArticles } from 'src/app/core/models/otherLatestArticles.model';

@Component({
    selector: 'home-latest',
    templateUrl: './latest.component.html',
    styleUrls: ['./latest.component.scss']

})
export class LatestComponent implements OnInit {
    lastone: any;
    articles: any = [];

    otherLatestArticles: Array<OtherLastetArticles> = [];

    constructor(private homeService: HomeService){}
    
    ngOnInit(): void {
        this.homeService.getLatestArticle()
        .subscribe(res => {
            console.log(res);
        });
    }
}