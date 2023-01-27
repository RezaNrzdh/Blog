import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'blog-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent {

    @Input() title?: string;
    @Input() name?: string;

    getvalue: string = "";

    get value(): string {

    }

    onChangedHandler (value: any): any {

    }
}
