import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {RdmComponent} from './rdm.component';
import {RdmRoutingModule} from './rdm.routing.module';
import {UsuarioService} from './usuario/usuario.service';
import {AuthGuard} from './usuario/guards/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        RdmRoutingModule,
        HttpModule,
        HttpClientModule
    ],
    declarations: [
        RdmComponent
    ],
    providers: [
        UsuarioService,
        AuthGuard
    ]
})
export class RdmModule { }
