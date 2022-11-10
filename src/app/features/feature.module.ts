import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { ArticleModule } from './article/article.module';

import { AboutComponent } from "./about/about.component";
import { ForgetComponent } from "./auth/forget/forget.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ContactComponent } from "./contact/contact.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FeatureRoutingModule } from "./feature-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        AboutComponent,
        ForgetComponent,
        LoginComponent,
        RegisterComponent,
        ContactComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        HomeModule,
        ArticleModule,
        FeatureRoutingModule
    ]
})
export class FeatureModule {}