import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";

import { CardGridComponent } from "./components/card-grid/card-grid.component";
import { ChipsComponent } from "./components/chips/chips.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { TextboxComponent } from "./components/textbox/textbox.component";
import { FilledButtonDirective } from "./directives/filled-button.directive";
import { CalendarPipe } from "./pipes/calendar.pipe";
import {AlertComponent} from "./components/alert/alert.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ChipsComponent,
        TextboxComponent,
        CardGridComponent,
        FilledButtonDirective,
        ButtonComponent,
        CalendarPipe,
        AlertComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ChipsComponent,
        TextboxComponent,
        CardGridComponent,
        FilledButtonDirective,
        ButtonComponent,
        CalendarPipe,
        AlertComponent
    ]
})
export class SharedModule{}