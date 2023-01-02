import { Component, OnInit } from '@angular/core';
import { AboutService } from "src/app/core/services/about.service";
import { AboutModel } from "../../core/models/about.model";

@Component({
    selector: 'blog-about',
    templateUrl: './about.component.html',
    providers: [AboutService],
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    data: AboutModel = new AboutModel();

    constructor(private aboutService: AboutService) { }

    ngOnInit(): void {
        this.data = this.aboutService.getAllData();
    }

}
