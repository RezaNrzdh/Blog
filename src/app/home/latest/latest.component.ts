import { Component, OnInit } from "@angular/core";
import { HomeService } from '../../services/home.service';

interface LatestArticle {
    img: string;
    title: string;
    desc: string;
    authorImg: string;
    author: string;
    duration: string;
    created: string;
  }

interface OtherLastetArticles {
  img: string;
  title: string;
  created: string;
}

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