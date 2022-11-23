import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';

import { RecentArticles } from 'src/app/core/models/recentArticles.model';

@Component({
    selector: 'home-recent',
    templateUrl: './recent.component.html',
    styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {
    recentArticles: Array<RecentArticles> = [];
    popular: any = [];

    constructor(private homeService: HomeService){}

    ngOnInit(): void {
        this.homeService.getOtherArticles(6,13).subscribe( res => {
            console.log(res);
        });
        
        this.homeService.getPopularArticles().subscribe( res => {
            this.popular = res;
        });
    }
}
