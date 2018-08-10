import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './usuario/guards/auth.guard';

const rdmRoutes: Routes = [
    {path: '', loadChildren: 'app/rdm/usuario/usuario.module#UsuarioModule'},
    {path: 'home',
        loadChildren: 'app/rdm/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(rdmRoutes)
    ],
    exports: [RouterModule]
})
export class RdmRoutingModule { }
