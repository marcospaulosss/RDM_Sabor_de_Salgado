///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {Login} from '../../../class/login';
import {isNull} from 'util';
import {isUndefined} from 'ngx-bootstrap/chronos/utils/type-checks';
import {UsuarioService} from "../usuario.service";

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
        if (!isUndefined(this._usuarioService.login) && this._usuarioService.login.token && !isNull(this._usuarioService.login.token) && this._usuarioService.login.refreshToken && !isNull(this._usuarioService.login.refreshToken)) {
          return true;
        }

        this._router.navigate(['/Admin']);

        return false;
    }


}
