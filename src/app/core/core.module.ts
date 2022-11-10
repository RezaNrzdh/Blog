import { NgModule } from "@angular/core";
import { ArticleService } from "./services/article.service";
import { HomeService } from "./services/home.service";

@NgModule({
    providers: [
        HomeService,
        ArticleService
    ]
})
export class CoreModule{}