import { Component, OnInit } from "@angular/core";
import { ArticleService } from 'src/app/core/services/article.service';
import { ArticleModel } from 'src/app/core/models/article.model';

@Component({
    selector: 'blog-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
    allarticles: any = [];
    lt: number = 0;

    constructor(private articleService: ArticleService){}

    ngOnInit(): void {
        this.articleService.getAllArticles(0).subscribe((res:ArticleModel) => {
            console.log(res);
            this.allarticles = res;
            this.lt = this.allarticles[this.allarticles.length - 1]._id;
        })
    }

    getMoreArticles() {
        this.articleService.getAllArticles(this.lt).subscribe((res:ArticleModel) => {
            this.allarticles = this.allarticles.concat(res);
            this.lt = this.allarticles[this.allarticles.length - 1]._id;
        })   
    }
}