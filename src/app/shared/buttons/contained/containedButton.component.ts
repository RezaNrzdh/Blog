import { Component, Input } from "@angular/core";

@Component({
    selector: 'blog-contained-button',
    templateUrl: './containedButton.component.html',
    styleUrls: ['./containedButton.component.scss']
})
export class ContainedButtonComponent {
    @Input() value: string = 'click';
    @Input() color: string = 'primary';
}