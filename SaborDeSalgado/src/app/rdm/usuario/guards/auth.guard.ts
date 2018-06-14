///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {UsuarioService} from '../usuario.service';
import {Login} from '../../../class/login';
import {isNull} from 'util';
import {isUndefined} from 'ngx-bootstrap/chronos/utils/type-checks';

@Injectable()
export class AuthGuard implements CanActivate {

  private login: Login;

  constructor(
      private _usuarioService: UsuarioService,
      private _router: Router
  ) {
    console.log('Auth guard');
  }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        this._usuarioService.tokenAcesso.subscribe(
            dados => {
              this.login = dados;
            }
        );

        if (!isUndefined(this.login) && this.login.token && !isNull(this.login.token) && this.login.refreshToken && !isNull(this.login.refreshToken)) {
          return true;
        }

        this._router.navigate(['/Admin']);

        return false;
    }


}
