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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TextareaComponent} from "./components/textarea/textarea.component";
import {CommentComponent} from "./components/comment/comment.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ChipsComponent,
        TextboxComponent,
        TextareaComponent,
        CardGridComponent,
        FilledButtonDirective,
        ButtonComponent,
        CalendarPipe,
        AlertComponent,
        CommentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
        AlertComponent,
        TextareaComponent,
        CommentComponent
    ]
})
export class SharedModule{}