import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContainedButtonComponent } from "./buttons/contained/containedButton.component";
import { IconButtonComponent } from "./buttons/icon/iconButton.component";
import { OutlinedButtonComponent } from "./buttons/outlined/outlinedButton.component";
import { ChipsComponent } from "./chips/chips.component";

@NgModule({
    declarations: [
        ChipsComponent,
        ContainedButtonComponent,
        IconButtonComponent,
        OutlinedButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ChipsComponent,
        ContainedButtonComponent,
        IconButtonComponent,
        OutlinedButtonComponent
    ]
})
export class SharedModule{}