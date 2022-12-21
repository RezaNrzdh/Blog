import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { ArticleModule } from './article/article.module';
import {ContactModule} from "./contact/contact.module";
import { CommonModule } from "@angular/common";
import { FeatureRoutingModule } from "./feature-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { FormsModule } from "@angular/forms";
import {AboutModule} from "./about/about.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        HomeModule,
        ArticleModule,
        AuthModule,
        ContactModule,
        AboutModule,
        FeatureRoutingModule
    ]
})
export class FeatureModule {}