import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
    { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) },
    { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
    { path: 'article', loadChildren: () => import('./features/article/article.module').then(m => m.ArticleModule) },
    { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },
    { path: 'forget', loadChildren: () => import('./features/forget/forget.module').then(m => m.ForgetModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class RoutingModule {

}
