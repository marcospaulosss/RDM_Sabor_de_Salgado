import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
    {path: 'login', loadChildren: 'app/usuario/usuario.module#UsuarioModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
