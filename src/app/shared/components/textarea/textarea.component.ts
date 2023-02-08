import {Component} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: "blog-textarea",
    templateUrl: "./textarea.component.html",
    styleUrls: ["textarea.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: TextareaComponent,
            multi: true
        }
    ]
})
export class TextareaComponent implements ControlValueAccessor {

    constructor() {
    }

    writeValue(obj: any) {
    }

    registerOnChange(fn: any) {
    }

    registerOnTouched(fn: any) {
    }
}