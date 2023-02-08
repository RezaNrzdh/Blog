import {Component, HostBinding, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'blog-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: TextboxComponent,
            multi: true
        }
    ]
})
export class TextboxComponent implements ControlValueAccessor {

    @Input() title!: string;
    @Input() type!: string;
    @Input() name!: string;
    @Input() width?: string;
    @HostBinding()

    value!: string;
    onChange!: (value: any) => void;
    onTouched!: () => void;

    constructor() {
    }

    writeValue(obj: any) {
        this.value = obj;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }
}
