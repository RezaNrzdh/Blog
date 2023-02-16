import {Component, HostBinding, Input, OnInit} from "@angular/core";

@Component({
    selector: 'button[blog-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() color!: string;
    @Input() icon?: boolean;
    @Input() width!: string;
    @Input() height!: string;
    @Input() round!: boolean;

    @HostBinding("style.width") _width: string = this.width;
    @HostBinding("style.height") _height: string = this.height

    ngOnInit () {
        this._width = this.width;
        this._height = this.height;
    }
}