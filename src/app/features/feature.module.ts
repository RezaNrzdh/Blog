import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { ArticleModule } from './article/article.module';

import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CommonModule } from "@angular/common";
import { FeatureRoutingModule } from "./feature-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        HomeModule,
        ArticleModule,
        AuthModule,
        FeatureRoutingModule
    ]
})
export class FeatureModule {}