import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ArticleService } from "./services/article.service";
import { ContactService } from "./services/contact.service";
import { HomeService } from "./services/home.service";
import {AboutService} from "./services/about.service";
import {SubscribeService} from "./services/subscribe.service";
import {CommentService} from "./services/comment.service";

@NgModule({
    providers: [
        HomeService,
        ArticleService,
        ContactService,
        AboutService,
        SubscribeService,
        CommentService
    ],
    imports: [
        HttpClientModule
    ]
})
export class CoreModule{}