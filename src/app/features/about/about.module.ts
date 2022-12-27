import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {AboutRoutingModule} from "./about-routing.module";

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AboutRoutingModule
    ]
})
export class AboutModule {}