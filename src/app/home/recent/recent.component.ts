import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

interface RecentArticles {
    img: string;
    title: string;
    authorImg: string;
    author: string;
    created: string;
}

interface PopularArticles {
    img: string;
    title: string;
    created: string;    
}

@Component({
    selector: 'home-recent',
    templateUrl: './recent.component.html',
    styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {
    recentArticles: Array<RecentArticles> = [];
    popularArticles: Array<PopularArticles> = [];

    constructor(private homeService: HomeService){}

    ngOnInit(): void {
        this.recentArticles = this.homeService.getRecentArticles();
        this.popularArticles = this.homeService.getPopularArticles();
    }
}
