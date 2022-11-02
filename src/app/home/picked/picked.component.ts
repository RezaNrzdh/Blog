import { Component, OnInit } from "@angular/core";
import { HomeService } from '../../services/home.service';

interface EditorPicked {
    img: string;
    title: string;
    created: string;
}

@Component({
    selector: 'home-picked',
    templateUrl: './picked.component.html',
    styleUrls: ['./picked.component.scss'],
    host: {'class': 'WidthContainer'}
})
export class PickedComponent implements OnInit {
    editorPicked: Array<EditorPicked> = [];
    
    constructor(private homeService: HomeService){}

    ngOnInit(): void {
        this.editorPicked = this.homeService.getEditorPicked();
    }
}