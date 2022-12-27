import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {RegisterRoutingModule} from "./register-routing.module";

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RegisterRoutingModule
    ]
})
export class RegisterModule { }