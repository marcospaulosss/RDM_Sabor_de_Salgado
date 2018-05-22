import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {LoginComponent} from "./login/login.component";
import {UsuarioService} from "./usuario.service";
import {UsuarioRoutingModule} from "./usuario.routing.module";
import {UsuarioComponent} from "./usuario.component";

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      HttpModule,
      UsuarioRoutingModule
  ],
  declarations: [
      LoginComponent,
      UsuarioComponent
  ],
    providers: [UsuarioService]
})
export class UsuarioModule { }