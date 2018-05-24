import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Login} from "../class/login";

@Injectable()
export class UsuarioService {

  constructor(private _http: Http) { console.log("usuario service"); }

  postLogin() {
    this._http.get('http://127.0.0.1:8000/login')
        .map(dados => dados)
        .subscribe(dados => {
          console.log(dados);
        });
  }
}
