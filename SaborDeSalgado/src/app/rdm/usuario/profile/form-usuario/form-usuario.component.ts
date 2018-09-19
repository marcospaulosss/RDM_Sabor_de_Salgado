import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../usuario.service";
import {Users} from "../../../../class/users";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  inscricao: any;

  constructor(
      private _usuarioService: UsuarioService,
      private _route: ActivatedRoute,
      private _router: Router
  ) { console.log('form-usuario'); }

  ngOnInit() {
    this.inscricao = this._route.data.subscribe(
        (info: {usuario: Users}) => {
          console.log(info.usuario);
        }
    );
  }

}
