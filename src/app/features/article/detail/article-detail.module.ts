import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ArticleDetailComponent } from "./article-detail.component";
import { MainComponent } from "./main/main.component";
import { SideComponent } from "./side/side.component";

@NgModule({
    declarations: [
        ArticleDetailComponent,
        MainComponent,
        SideComponent
    ],
    imports: [
        CoreModule,
        CommonModule,
        SharedModule
    ]
})
export class ArticleDetailModule {}