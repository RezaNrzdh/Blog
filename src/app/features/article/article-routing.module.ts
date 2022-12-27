import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArticleDetailComponent} from "./detail/article-detail.component";
import {ArticleListComponent} from "./list/article-list.component";

const routes: Routes = [
    { path: '', component: ArticleListComponent },
    { path: ':slug', component: ArticleDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ArticleRoutingModule {}