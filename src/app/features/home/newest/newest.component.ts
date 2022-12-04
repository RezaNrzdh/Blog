import { Component, OnInit } from "@angular/core";
import { HomeService } from 'src/app/core/services/home.service';

@Component({
    selector: 'home-latest',
    templateUrl: './newest.component.html',
    styleUrls: ['./newest.component.scss']

})
export class NewestComponent implements OnInit {
    lastone: any = [];
    others: any = [];

    constructor(private homeService: HomeService){}
    
    ngOnInit(): void {
        this.homeService.getNewestArticle()
        .subscribe(res => {
            this.lastone = res;
            this.lastone.map((r: any,i: number) => {
                if(i > 0)
                   this.others.push(r);
            });
        });
    }
}