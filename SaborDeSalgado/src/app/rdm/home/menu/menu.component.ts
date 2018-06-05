import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      this.programationJquary();


  }

    programationJquary() {
        // Main Left Sidebar Menu
        $('#menu_lateral').sideNav({
            edge: 'left', // Choose the horizontal origin
        });

        // Overlay Menu (Full screen menu)
        $('aside .menu-sidebar-collapse').sideNav({
            menuWidth: 240,
            edge: 'left', // Choose the horizontal origin
            // closeOnClick:true, // Set if default menu open is true
            menuOut: false // Set if default menu open is true
        });
    }
}
