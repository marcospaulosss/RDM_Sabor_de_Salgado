import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import {FormGroup} from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Login} from '../../class/login';

@Injectable()
export class UsuarioService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    login = new Login();

    tokenAcesso = new EventEmitter<Login>();

  constructor(
      private _http: Http
  ) { console.log('usuario service'); }

  postLogin(form: FormGroup) {
      return this._http.post('http://127.0.0.1:8000/oauth/token', JSON.stringify(form.value), this.options);
  }
}
