import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./article.component";
import { SideComponent } from "./side/side.component";
import { MainComponent } from "./main/main.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        ArticleComponent,
        SideComponent,
        MainComponent
    ],
    imports:[
        CommonModule,
        SharedModule
    ]
})
export class ArticleModule {}