import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/core/services/article.service";

interface Article {
    img: string;
    title: string;
    author: string;
    authorImg: string;
    created: string;
    duration: string;
    desc: string;
    tags: Array<string>
}

@Component({
    selector: 'article-detail-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    article: Article = { img: '', title: '', author: '', authorImg: '', created: '', duration: '', desc: '', tags: [] };
    
    constructor(private articleService: ArticleService){}

    ngOnInit(): void {
        this.article = this.articleService.getArticle();
    }
}