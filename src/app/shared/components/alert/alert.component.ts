import {Component, HostBinding, Input, OnInit} from "@angular/core";

@Component({
    selector: 'blog-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements  OnInit{
    @Input() status?: number;
    @HostBinding('class.alert-success') success?: boolean = false;
    @HostBinding('class.alert-danger') danger?: boolean = false;

    ngOnInit() {
        if(this.status == 200) {
            this.success = true;
        }
        else {
            this.danger = true;
        }
    }
}