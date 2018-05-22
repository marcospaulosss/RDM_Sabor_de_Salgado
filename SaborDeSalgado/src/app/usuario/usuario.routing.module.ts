import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";


const usuarioRoutes: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(usuarioRoutes)
  ],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
