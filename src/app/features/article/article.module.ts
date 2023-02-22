import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ArticleRoutingModule} from "./article-routing.module";
import {ArticleListComponent} from "./list/article-list.component";
import {ArticleDetailComponent} from "./detail/article-detail.component";
import {SideComponent} from "./detail/side/side.component";
import {MainComponent} from "./detail/main/main.component";
import {CommentsComponent} from "./detail/comments/comments.component";

@NgModule({
    declarations: [
        ArticleListComponent,
        ArticleDetailComponent,
        SideComponent,
        MainComponent,
        CommentsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ArticleRoutingModule
    ]
})
export class ArticleModule {}