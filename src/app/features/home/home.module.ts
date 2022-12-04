import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { NewestComponent } from './newest/newest.component';
import { PickedComponent } from './picked/picked.component';
import { RecentComponent } from './recent/recent.component';

@NgModule({
    declarations: [
        HomeComponent,
        NewestComponent,
        PickedComponent,
        RecentComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class HomeModule {}