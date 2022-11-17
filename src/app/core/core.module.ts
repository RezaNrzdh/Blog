import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ArticleService } from "./services/article.service";
import { HomeService } from "./services/home.service";

@NgModule({
    providers: [
        HomeService,
        ArticleService
    ],
    imports: [
        HttpClientModule
    ]
})
export class CoreModule{}