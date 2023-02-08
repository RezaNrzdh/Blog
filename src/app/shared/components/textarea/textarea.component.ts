import {Component, Input} from "@angular/core";
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

    @Input() title: string = "";
    @Input() placeholder: string = "";
    @Input() maxLength: number = 150;
    @Input() rows: number = 4;
    @Input() width: string = "100%";

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