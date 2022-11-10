import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { AboutComponent } from "./features/about/about.component";
import { LoginComponent } from "./features/auth/login/login.component";
import { RegisterComponent } from "./features/auth/register/register.component";
import { ContactComponent } from "./features/contact/contact.component";
import { HomeComponent } from "./features/home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {
    
}