import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ArticleService } from "./services/article.service";
import { ContactService } from "./services/contact.service";
import { HomeService } from "./services/home.service";

@NgModule({
    providers: [
        HomeService,
        ArticleService,
        ContactService
    ],
    imports: [
        HttpClientModule
    ]
})
export class CoreModule{}