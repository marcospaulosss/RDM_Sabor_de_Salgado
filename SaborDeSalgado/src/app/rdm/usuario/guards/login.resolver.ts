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
    let response = this._usuarioService.postUsuario().subscribe(
        dados => {
console.log(dados);
    }, error => {
          console.log(error);
        // ACESSO NEGADO
        // lodingJquary(false);
        // showAlert('#login-alert');
    });

    return this.usuario;
  }
}
