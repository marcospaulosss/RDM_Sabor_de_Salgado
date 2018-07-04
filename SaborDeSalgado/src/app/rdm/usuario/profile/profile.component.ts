import { Component, OnInit } from '@angular/core';

declare var colorBody: any;
declare var paralaxMaterialize: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      colorBody('white');
      paralaxMaterialize();
  }

}
