import { Component, Input } from "@angular/core";

@Component({
    selector: 'button[filled-button], button[outlined-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() state?: string;
    @Input() icon?: boolean;
    @Input() title?: string;
    @Input() width?: string;
    @Input() height?: string;
    @Input() round?: boolean;
}