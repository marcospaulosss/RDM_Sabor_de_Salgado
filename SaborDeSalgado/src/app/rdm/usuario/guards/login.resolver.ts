import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {UsuarioService} from '../usuario.service';
import {Users} from '../../../class/users';

@Injectable()
export class LoginResolver implements Resolve<Users> {

    usuario = new Users();

  constructor(private _usuarioService: UsuarioService) {
    console.log('login resolver');
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this._usuarioService.postUsuario().subscribe(
        dados => {
            console.log(dados);
            this.usuario.id = dados[0].id;
            this.usuario.name = dados[0].name;
            this.usuario.email = dados[0].email;
            this.usuario.active = dados[0].active;
            this.usuario.created_at = dados[0].created_at;
            this.usuario.phone = dados[0].phone;
            this.usuario.updated_at = dados[0].updated_at;

            return this.usuario;
    }, error => {
            return error;
    });
  }
}
