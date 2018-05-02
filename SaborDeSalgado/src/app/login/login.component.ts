import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.programationJquary();
  }

  programationJquary() {
      setTimeout(function() {
          $('#loader-wrapper').hide();
          $('#transaction').removeClass('scale-out');
      }, 2000);
  }
}
