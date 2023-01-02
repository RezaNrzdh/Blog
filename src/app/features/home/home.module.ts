import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {HomeRoutingModule} from "./home-routing.module";

import { HomeComponent } from './home.component';
import { NewestComponent } from './components/newest/newest.component';
import { PickedComponent } from './components/picked/picked.component';
import { RecentComponent } from './components/recent/recent.component';
import { NewsletterComponent } from "./components/newsletter/newsletter.component";

@NgModule({
    declarations: [
        HomeComponent,
        NewestComponent,
        PickedComponent,
        RecentComponent,
        NewsletterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    exports: [
        NewsletterComponent
    ]
})
export class HomeModule {}