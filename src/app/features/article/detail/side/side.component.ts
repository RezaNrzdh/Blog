import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/core/services/article.service";

@Component({
    selector: 'article-detail-side',
    templateUrl: './side.component.html',
    styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
    popular: any = [];

    constructor(private articleService: ArticleService){}

    ngOnInit(): void {
        this.articleService.getPopularArticles().subscribe(res => {
            this.popular = res;
        });
    }
}