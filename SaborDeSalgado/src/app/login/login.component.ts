import { Component, OnInit } from '@angular/core';

import {LoginService} from "./login.service";

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

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
}
