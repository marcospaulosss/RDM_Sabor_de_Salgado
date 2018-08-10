import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import {Users} from "../../../class/users";

@Injectable()
export class FormUsuarioResolver implements Resolve<any> {
    constructor() {
       // console.log('login resolver');
    }

    resolve(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return true;
        // return this._usuarioService.getSecretLogin();
    }
}
