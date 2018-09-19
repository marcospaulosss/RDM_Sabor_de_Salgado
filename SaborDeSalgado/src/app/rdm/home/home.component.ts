import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inscricaoResolve: any;

  constructor(private route: ActivatedRoute) { console.log('home component');}

  ngOnInit() {
    this.inscricaoResolve = this.route.data.subscribe(
        (info) => {
          console.log(info.usuario);
        }
    );
  }

}
