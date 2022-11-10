import { Component, HostBinding, Input, OnInit } from "@angular/core";

import { EditorPicked } from '../../../core/models/editorPicked.model';

@Component({
    selector:'div[blog-card-grid]',
    templateUrl: './card-grid.component.html',
    styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
    @Input() data: EditorPicked = { img: '', title: '', created: ''} ;
    @Input() isShadow: boolean = false;

    @HostBinding('class') boxshadow?: string;

    ngOnInit (): void {
        if(this.isShadow){
            this.boxshadow = 'boxshadow';
        }
    }
}