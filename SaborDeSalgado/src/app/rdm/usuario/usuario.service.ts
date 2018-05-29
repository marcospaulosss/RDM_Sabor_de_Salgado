import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {FormGroup} from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class UsuarioService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

  constructor(
      private _http: Http
  ) { console.log('usuario service'); }

  postLogin(form: FormGroup) {
      this._http.post('http://127.0.0.1:8000/oauth/token', JSON.stringify(form.value), this.options)
          .map(res => res)
          .subscribe(dados => console.log(dados));
  }
}
