import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

import {UsuarioService} from "../usuario.service";
import {Login} from "../../../class/login";

declare var $: any;
declare var lodingJquary: any;
declare var showAlert: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login = new Login();

    result: any;

    paramsLogin = new Login();

    formulario: FormGroup;

    constructor(
        private _loginService: UsuarioService,
        private _route: Router,
        private _activatedRoute: ActivatedRoute,
        private _formBuilder: FormBuilder,
    ) {
        console.log('login componet');
    }

    ngOnInit() {
        lodingJquary(false);

        this.formulario = this._formBuilder.group({
            grant_type: [this.paramsLogin.type],
            client_id: [this.paramsLogin.client_id],
            client_secret: [this.paramsLogin.client_secret],
            username: [null],
            password: [null]
        });
    }

    getNovoRegistro() {
        // this._loginService.postLogin();
    }

    onSubmit() {
        lodingJquary(true);

        // VERIFICANDO O RETORNO DO LOGIN DO USUARIO
        this.result = this._loginService.postLogin(this.formulario)
            .subscribe(dados => {
                // ACESSO PERMITIDO
                    this.login.token = dados.access_token;
                    this.login.refreshToken = dados.refresh_token;

                    this._loginService.emitirTokenAcesso.emit(this.login);
                    this._loginService.login = this.login;

                    this._route.navigate(['/Admin/home']);
            }, error => {
                // ACESSO NEGADO
                lodingJquary(false);
                showAlert('#login-alert');
            });
    }
}
