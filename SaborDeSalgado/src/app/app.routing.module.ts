import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
    {path: 'Admin', loadChildren: 'app/rdm/rdm.module#RdmModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
