import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import {ArticleListComponent} from "./list/article-list.component";
import {ArticleDetailComponent} from "./detail/article-detail.component";
import {SideComponent} from "./detail/side/side.component";
import {MainComponent} from "./detail/main/main.component";
import {ArticleRoutingModule} from "./article-routing.module";

@NgModule({
    declarations: [
        ArticleListComponent,
        ArticleDetailComponent,
        SideComponent,
        MainComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ArticleRoutingModule
    ]
})
export class ArticleModule {}