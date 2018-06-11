import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {RdmComponent} from "./rdm.component";
import {RdmRoutingModule} from "./rdm.routing.module";
import {UsuarioService} from "./usuario/usuario.service";

@NgModule({
    imports: [
        CommonModule,
        RdmRoutingModule,
    ],
    declarations: [
        RdmComponent
    ],
    providers: [
        UsuarioService
    ]
})
export class RdmModule { }
