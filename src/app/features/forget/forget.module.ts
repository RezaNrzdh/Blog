import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ForgetComponent} from "./forget.component";
import {ForgetRoutingModule} from "./forget-routing.module";

@NgModule({
    declarations: [
        ForgetComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ForgetRoutingModule
    ]
})
export class ForgetModule { }