import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {FormGroup} from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Login} from '../../class/login';

@Injectable()
export class UsuarioService {

    login = new Login();
    private headers = new Headers();
    private options: RequestOptions;

    emitirTokenAcesso = new EventEmitter<Login>();

  constructor(private _http: Http) {
      console.log('usuario service');
      this.headers.append('Content-Type', 'application/json');
      this.options = new RequestOptions({ headers: this.headers });
  }

  setHeaders() {
      this.headers.append('Authorization', 'Bearer ' + this.login.token);
  }

  postLogin(form: FormGroup): Observable<any> {
      console.log(form);
      return this._http.post('http://127.0.0.1:8000/oauth/token', JSON.stringify(form.value), this.options)
          .map((response: any) => response.json());
  }

  postUsuario(): Observable<any> {
      console.log(this.headers);
      return this._http.get('http://127.0.0.1:8000/User', this.options)
          .map((response: any) => response.json());
  }
}
