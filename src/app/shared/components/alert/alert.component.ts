import {Component, HostBinding, Input, OnInit} from "@angular/core";

@Component({
    selector: 'div[blog-alert]',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements  OnInit{

    @Input() state?: string;
    @HostBinding('class.alert-success') success?: boolean = false;
    @HostBinding('class.alert-danger') danger?: boolean = false;

    ngOnInit() {
        if(this.state == 'alertSuccess') this.success = true;
        else this.danger = true;
    }
}