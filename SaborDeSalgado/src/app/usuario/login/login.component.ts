import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

import {UsuarioService} from "../usuario.service";
import {Users} from "../../class/users";
import {Login} from "../../class/login";
import {Http, Headers, RequestOptions} from "@angular/http";

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new Users();

  inscricao: any;

  paramsLogin = new Login();

  formulario: FormGroup;

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(
      private _loginService: UsuarioService,
      private _route: Router,
      private _activatedRoute: ActivatedRoute,
      private _formBuilder: FormBuilder,
      private _http: Http
  ) { }

  ngOnInit() {
      this.programationJquary();

       /*this.inscricao = this._activatedRoute.data.subscribe(
           (info: {login: Login}) => {
               this.paramsLogin = info.login;
           }
       );*/

       this.formulario = this._formBuilder.group({
           grant_type: [this.paramsLogin.type],
           client_id: [this.paramsLogin.client_id],
           client_secret: [this.paramsLogin.client_secret],
           username: [null],
           password: [null]
       })

       console.log(this.paramsLogin);
  }

  programationJquary() {
      setTimeout(function() {
          $('#loader-wrapper').hide();
          $('#transaction').removeClass('scale-out');
      }, 2000);
  }

  getNovoRegistro() {
      this._loginService.postLogin();
  }

    onSubmit() {
      console.log(this.formulario.value);

      this._http.post('http://127.0.0.1:8000/oauth/token', JSON.stringify(this.formulario.value), this.options)
          .map(res => res)
          .subscribe(dados => console.log(dados));
    }
}
