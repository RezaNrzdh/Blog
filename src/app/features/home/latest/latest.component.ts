import { Component, OnInit } from "@angular/core";
import { HomeService } from 'src/app/core/services/home.service';

import { OtherLastetArticles } from 'src/app/core/models/otherLatestArticles.model';

@Component({
    selector: 'home-latest',
    templateUrl: './latest.component.html',
    styleUrls: ['./latest.component.scss']

})
export class LatestComponent implements OnInit {
    lastone: any = [];
    others: any = [];

    otherLatestArticles: Array<OtherLastetArticles> = [];

    constructor(private homeService: HomeService){}
    
    ngOnInit(): void {
        this.homeService.getLatestArticle()
        .subscribe(res => {
            this.lastone = res;
            this.lastone.map((r: any,i: number) => {
                if(i > 0)
                   this.others.push(r);
            });
        });
    }
}