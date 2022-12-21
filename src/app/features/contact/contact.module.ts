import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {CommonModule} from "@angular/common";
import {RoutingModule} from "../../routing.module";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ContactRoutingModule} from "./contact-routing.module";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        RoutingModule,
        FormsModule,
        SharedModule,
        ContactRoutingModule
    ]
})
export class ContactModule {}