import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutingModule } from "../routing.module";

import { CardGridComponent } from "./components/card-grid/card-grid.component";
import { ChipsComponent } from "./components/chips/chips.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { TextboxComponent } from "./components/textbox/textbox.component";
import { FilledButtonDirective } from "./directives/filled-button.directive";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ChipsComponent,
        TextboxComponent,
        CardGridComponent,
        FilledButtonDirective
    ],
    imports: [
        CommonModule,
        RoutingModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ChipsComponent,
        TextboxComponent,
        CardGridComponent,
        FilledButtonDirective
    ]
})
export class SharedModule{}