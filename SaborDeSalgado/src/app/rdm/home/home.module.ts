import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routing.module';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        MenuComponent
    ],
    providers: [
    ]
})
export class HomeModule { }
