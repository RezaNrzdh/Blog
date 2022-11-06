import { NgModule } from "@angular/core";
import { ChipsComponent } from "./chips/chips.component";

@NgModule({
    declarations: [
        ChipsComponent
    ],
    exports: [
        ChipsComponent
    ]
})
export class SharedModule{}