import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "src/app/core/services/article.service";

@Component({
    selector: 'article-detail-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    article: any = [];
    
    constructor(private articleService: ArticleService, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.article = this.articleService.getArticle(this.route.snapshot.params['slug']).subscribe(res => {
            this.article = res;
        });
    }
}