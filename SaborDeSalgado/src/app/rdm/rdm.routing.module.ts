import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const rdmRoutes: Routes = [
    {path: 'login', loadChildren: 'app/rdm/usuario/usuario.module#UsuarioModule'},
    {path: 'home', loadChildren: 'app/rdm/home/home.module#HomeModule'}
];

@NgModule({
    imports: [
        RouterModule.forChild(rdmRoutes)
    ],
    exports: [RouterModule]
})
export class RdmRoutingModule { }
