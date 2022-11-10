import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ArticleListComponent } from "./article-list.component";

@NgModule({
    declarations: [
        ArticleListComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ArticleListModule {}