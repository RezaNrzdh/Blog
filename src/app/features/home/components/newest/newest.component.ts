import {Component, OnInit} from "@angular/core";
import { HomeService } from 'src/app/core/services/home.service';
import {ArticleModel} from "../../../../core/models/article.model";

@Component({
    selector: 'home-latest',
    templateUrl: './newest.component.html',
    styleUrls: ['./newest.component.scss']

})
export class NewestComponent implements OnInit {
    lastone: any = [];
    others: any = [];
    loading: boolean = false;

    constructor(private homeService: HomeService){}

    ngOnInit(): void {

        this.loading = true;

        this.homeService.getNewestArticle().subscribe({
            next: ((value: ArticleModel) => {
                if(value) this.loading=false;

                this.lastone = this.lastone.concat(value);
                console.log(this.lastone);
                this.lastone.map((r: any, i: number) => {
                   if(i > 0)
                       this.others.push(r);
                });
            }),
            error: ((err: any) => {
                console.log(err);
            }),
            complete: (() => {})
        });
    }
}