import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UsuarioService} from "../usuario.service";
import {Users} from "../../class/users";
import {Login} from "../../class/login";

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

  constructor(
      private _loginService: UsuarioService,
      private _route: Router,
      private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.programationJquary();

       this.inscricao = this._activatedRoute.data.subscribe(
           (info: {login: Login}) => {
               console.log('Recebendo o obj de login resolve');
               this.paramsLogin = info.login;
           }
       );

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

  login() {
      this.user.name = 'marcos paulo';
    console.log(this.user.name);
  }
}
