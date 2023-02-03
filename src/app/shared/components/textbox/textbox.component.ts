import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'blog-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextboxComponent),
            multi: true
        }
    ]
})
export class TextboxComponent implements ControlValueAccessor {

    @Input() title?: string;
    @Input() name?: string;
    _value?: any;

    get value(): any {
        return this._value;
    };

    set value(_v: any) {
        this._value = _v;
    }

    writeValue(value: string) {
        this._value = value;
    }

    registerOnChange(fn: any) {
    }

    registerOnTouched(fn: any) {
    }
}
