import { Component, Input } from "@angular/core";

@Component({
    selector: 'button[filled-button], button[outlined-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() type?: string;
    @Input() icon?: boolean;
}