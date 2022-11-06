import { Component, Input } from "@angular/core";

@Component({
    selector: 'blog-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
    @Input() value: string = '';
}