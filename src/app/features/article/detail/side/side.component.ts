import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/core/services/article.service";

interface PopularArticles {
    img: string;
    title: string;
    created: string;    
}

@Component({
    selector: 'article-detail-side',
    templateUrl: './side.component.html',
    styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
    popularArticles: Array<PopularArticles> = [];

    constructor(private articleService: ArticleService){}

    ngOnInit(): void {
        this.popularArticles = this.articleService.getPopularArticles();
    }
}