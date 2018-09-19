import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {FormGroup} from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Login} from '../../class/login';
import {Users} from "../../class/users";

@Injectable()
export class UsuarioService {

    login = new Login();
    private headers = new Headers();
    private options: RequestOptions;

    emitirTokenAcesso = new EventEmitter<Login>();

    username: string;

    emitirUsuario = new EventEmitter<Users>();

  constructor(private _http: Http) {
      console.log('usuario service');
      this.headers.append('Content-Type', 'application/json');
      this.options = new RequestOptions({ headers: this.headers });
  }

  setHeaders() {
      this.headers.append('Authorization', 'Bearer ' + this.login.token);
  }

  postLogin(form: FormGroup): Observable<any> {
      this.username = form.value.username;
      return this._http.post('http://127.0.0.1:8000/oauth/token', JSON.stringify(form.value), this.options)
          .map((response: any) => response.json());
  }

  postUsuario(): Observable<any> {
      let params = {
        'email': this.username
      };

      return this._http.post('http://127.0.0.1:8000/Login', JSON.stringify(params), this.options)
          .map((response: any) => response.json());
  }
}
