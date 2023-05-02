import {Component, OnInit} from "@angular/core";
import { HomeService } from 'src/app/core/services/home.service';
import {ArticleModel} from "../../../../core/models/article.model";

@Component({
    selector: 'home-latest',
    templateUrl: './newest.component.html',
    styleUrls: ['./newest.component.scss']
})
export class NewestComponent implements OnInit {
    lastone: ArticleModel = new ArticleModel;
    others: any = [];
    loading: boolean = false;

    constructor(private homeService: HomeService){
    }

    ngOnInit(): void {

        let arr: ArticleModel[];
        this.loading = true;

        this.homeService.getNewestArticle().subscribe({
            next: ((value: ArticleModel[]) => {
                if(value) this.loading = false;

                this.others =  this.others.concat(value);
                this.lastone = this.others.shift();

            }),
            error: ((err: any) => {
                console.log(err);
            }),
            complete: (() => {})
        });
    }
}