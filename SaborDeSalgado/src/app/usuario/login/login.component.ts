import { Component, OnInit } from '@angular/core';

import {UsuarioService} from "../usuario.service";
import {Users} from "../../class/users";

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new Users();

  constructor(private _loginService: UsuarioService) { }

  ngOnInit() {
      this.programationJquary();
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
