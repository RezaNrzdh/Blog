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
        this.aboutService.getTeamMember().subscribe({
            next: ((value:AboutModel) => {
                this.data.goals = value.goals;
                this.data.properties = value.properties;
                this.data.team = value.team;
            }),
            error: ((err: any) => { console.log(err) }),
        })
    }

}
