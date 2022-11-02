import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LatestComponent } from './latest/latest.component';
import { PickedComponent } from './picked/picked.component';
import { RecentComponent } from './recent/recent.component';

@NgModule({
    declarations: [
        HomeComponent,
        LatestComponent,
        PickedComponent,
        RecentComponent
    ],
    imports: [CommonModule]
})
export class HomeModule {}