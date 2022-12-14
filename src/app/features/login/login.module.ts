import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }