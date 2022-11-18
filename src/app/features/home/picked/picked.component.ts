import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/core/services/home.service";
import { EditorPicked } from 'src/app/core/models/editorPicked.model';

@Component({
    selector: 'home-picked',
    templateUrl: './picked.component.html',
    styleUrls: ['./picked.component.scss']
})
export class PickedComponent implements OnInit {
    editorPicked: any = [];
    
    constructor(private homeService: HomeService){}

    ngOnInit(): void {
        this.homeService.getEditorPicked()
        .subscribe(
            res => {
                this.editorPicked = res;
            }
        );
    }
}