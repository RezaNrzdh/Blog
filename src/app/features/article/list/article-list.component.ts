import { Component, OnInit } from "@angular/core";
import { HomeService } from 'src/app/core/services/home.service';

import { EditorPicked } from 'src/app/core/models/editorPicked.model';

@Component({
    selector: 'blog-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
    articles: any = [];

    constructor(private homeService: HomeService){}

    ngOnInit(): void {
        this.articles = this.homeService.getEditorPicked();
    }
}