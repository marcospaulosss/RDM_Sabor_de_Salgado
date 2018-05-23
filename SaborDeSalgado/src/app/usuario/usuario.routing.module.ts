import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {LoginResolver} from "./guards/login.resolver";


const usuarioRoutes: Routes = [
  { path: '', component: LoginComponent,
    resolve: {login: LoginResolver}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usuarioRoutes)
  ],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
