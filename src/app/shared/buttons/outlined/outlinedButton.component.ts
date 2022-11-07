import { Component, Input } from "@angular/core";

@Component({
    selector: 'blog-outlined-button',
    templateUrl: './outlinedButton.component.html',
    styleUrls: ['./outlinedButton.component.scss']
})
export class OutlinedButtonComponent {
    @Input() value: string = 'click';
    @Input() color: string = 'primary';
}