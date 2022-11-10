import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ArticleDetailComponent } from "./article/detail/article-detail.component";
import { ArticleListComponent } from "./article/list/article-list.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    { path: 'article', component: ArticleListComponent },
    { path: 'article/:id', component: ArticleDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent }

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}