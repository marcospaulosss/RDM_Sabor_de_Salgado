import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../usuario.service";

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  constructor(private _usuarioService: UsuarioService) { console.log(this._usuarioService); }

  ngOnInit() {
  }

}
