import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';


const appRoutes: Routes = [
  { path: '/login', component: LoginComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '/about', component: AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
