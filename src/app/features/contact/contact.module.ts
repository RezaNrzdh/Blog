import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ContactRoutingModule} from "./contact-routing.module";
import {HomeModule} from "../home/home.module";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ContactRoutingModule,
        HomeModule
    ]
})
export class ContactModule {}