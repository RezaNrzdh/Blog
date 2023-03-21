import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ArticleService } from "./services/article.service";
import { ContactService } from "./services/contact.service";
import { HomeService } from "./services/home.service";
import {AboutService} from "./services/about.service";
import {SubscribeService} from "./services/subscribe.service";
import {CommentService} from "./services/comment.service";
import {ReplyService} from "./services/reply.service";
import {AuthService} from "./services/auth.service";
import {HttpInterceptorService} from "./interceptors/http.interceptor";

@NgModule({
    providers: [
        HomeService,
        ArticleService,
        ContactService,
        AboutService,
        SubscribeService,
        CommentService,
        ReplyService,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
    ],
    imports: [
        HttpClientModule
    ]
})
export class CoreModule{}