import { Component, OnInit } from "@angular/core";
import { ArticleService } from '../../services/article.service';

interface Article {
    img: string;
    title: string;
    author: string;
    authorImg: string;
    created: string;
    desc: string;
}

@Component({
    selector: 'article-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    article: Article = { img: '', title: '', author: '', authorImg: '', created: '', desc: '' };
    
    constructor(private articleService: ArticleService){}

    ngOnInit(): void {
        this.article = this.articleService.getArticle();
    }
}