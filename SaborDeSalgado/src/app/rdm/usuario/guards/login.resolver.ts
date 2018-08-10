import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {Login} from '../../../class/login';
import {UsuarioService} from '../usuario.service';

@Injectable()
export class LoginResolver implements Resolve<Login> {

  constructor(private _usuarioService: UsuarioService) {
    console.log('login resolver');
  }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    //return this._usuarioService.getSecretLogin();
  }
}
