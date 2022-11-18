import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
    selector:'div[blog-card-grid]',
    templateUrl: './card-grid.component.html',
    styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
    @Input() data: any;
    @Input() isShadow: boolean = false;

    @HostBinding('class') boxshadow?: string;

    ngOnInit (): void {
        if(this.isShadow){
            this.boxshadow = 'boxshadow';
        }
    }
}