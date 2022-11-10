import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ArticleDetailModule } from "./detail/article-detail.module";
import { ArticleListModule } from "./list/article-list.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ArticleDetailModule,
        ArticleListModule
    ]
})
export class ArticleModule {}