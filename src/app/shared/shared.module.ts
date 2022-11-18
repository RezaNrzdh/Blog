import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutingModule } from "../routing.module";
import { ButtonComponent } from "./components/button/button.component";

import { CardGridComponent } from "./components/card-grid/card-grid.component";
import { ChipsComponent } from "./components/chips/chips.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { TextboxComponent } from "./components/textbox/textbox.component";
import { FilledButtonDirective } from "./directives/filled-button.directive";
import { CalendarPipe } from "./pipes/calendar.pipe";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ChipsComponent,
        TextboxComponent,
        CardGridComponent,
        FilledButtonDirective,
        ButtonComponent,
        CalendarPipe
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
        FilledButtonDirective,
        ButtonComponent,
        CalendarPipe
    ]
})
export class SharedModule{}