import { Component, OnInit } from "@angular/core";
import { HomeService } from 'src/app/core/services/home.service';
import {ArticleModel} from "../../../core/models/article.model";

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

        this.homeService.getNewestArticle().subscribe((res: ArticleModel) => {
            if(res) this.loading=false;

            this.lastone = res;
            this.lastone.map((r: any,i: number) => {
                if(i > 0)
                   this.others.push(r);
            });
        });
    }
}