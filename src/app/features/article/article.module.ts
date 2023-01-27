import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";

import {ArticleRoutingModule} from "./article-routing.module";
import {ArticleListComponent} from "./list/article-list.component";
import {ArticleDetailComponent} from "./detail/article-detail.component";
import {SideComponent} from "./detail/side/side.component";
import {MainComponent} from "./detail/main/main.component";
import {CommentComponent} from "./detail/comment/comment.component";

@NgModule({
    declarations: [
        ArticleListComponent,
        ArticleDetailComponent,
        SideComponent,
        MainComponent,
        CommentComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ArticleRoutingModule
    ]
})
export class ArticleModule {}