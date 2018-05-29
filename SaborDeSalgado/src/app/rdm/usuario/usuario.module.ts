import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {UsuarioRoutingModule} from "./usuario.routing.module";
import {LoginComponent} from "./login/login.component";
import {UsuarioComponent} from "./usuario.component";
import {UsuarioService} from "./usuario.service";



@NgModule({
  imports: [
    CommonModule,
      HttpModule,
      UsuarioRoutingModule,
      ReactiveFormsModule
  ],
  declarations: [
      LoginComponent,
      UsuarioComponent
  ],
    providers: [
        UsuarioService
    ]
})
export class UsuarioModule { }
