import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routing.module';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {UsuarioModule} from '../usuario/usuario.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        UsuarioModule
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
