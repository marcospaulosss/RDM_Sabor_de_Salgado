import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

import {UsuarioService} from "../usuario.service";
import {Login} from "../../../class/login";

declare var $: any;

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
    }

    ngOnInit() {
        this.lodingJquary(false);

        this.formulario = this._formBuilder.group({
            grant_type: [this.paramsLogin.type],
            client_id: [this.paramsLogin.client_id],
            client_secret: [this.paramsLogin.client_secret],
            username: [null],
            password: [null]
        });
    }

    lodingJquary(ativar) {
        if (ativar === true) {
            $('#loader-wrapper').show();
            $('#transaction').addClass('scale-out');
        } else {
            setTimeout(function () {
                $('#loader-wrapper').hide();
                $('#transaction').removeClass('scale-out');
            }, 2000);
        }
    }

    getNovoRegistro() {
        // this._loginService.postLogin();
    }

    onSubmit() {
        this.lodingJquary(true);

        // VERIFICANDO O RETORNO DO LOGIN DO USUARIO
        this.result = this._loginService.postLogin(this.formulario)
            .map(res => res)
            .subscribe(dados => {
                if (dados.status === 200) {
                    // ACESSO PERMITIDO

                    let result = dados.json();

                    this.login.token = result.access_token;
                    this.login.refreshToken = result.refresh_token;

                    this._loginService.tokenAcesso.emit(this.login);

                    this._route.navigate(['/Admin/home']);
                } else {
                    // ACESSO NEGADO

                    this._route.navigate(['/Admin']);
                }

            });
    }
}
