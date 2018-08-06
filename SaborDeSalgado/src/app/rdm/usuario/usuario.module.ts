import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {UsuarioRoutingModule} from './usuario.routing.module';
import {LoginComponent} from './login/login.component';
import {UsuarioComponent} from './usuario.component';
import {ProfileComponent} from './profile/profile.component';
import {FormUsuarioComponent} from './profile/form-usuario/form-usuario.component';

@NgModule({
  imports: [
    CommonModule,
      HttpModule,
      UsuarioRoutingModule,
      ReactiveFormsModule,
      FormsModule
  ],
  declarations: [
      LoginComponent,
      UsuarioComponent,
      ProfileComponent,
      FormUsuarioComponent
  ],
    providers: [
    ]
})
export class UsuarioModule { }
