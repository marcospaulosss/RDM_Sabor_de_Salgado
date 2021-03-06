import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.programationJquary();
    }

    abrir() {
        /*if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }*/
    }

    programationJquary() {
        // Commom, Translation & Horizontal Dropdown
        $('.dropdown-button, .translation-button, .dropdown-menu').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: true,
            gutter: 0,
            belowOrigin: true,
            alignment: 'left',
            stopPropagation: false
        });
        // Notification, Profile & Settings Dropdown
        $('.notification-button, .profile-button, .dropdown-settings').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: true,
            gutter: 0,
            belowOrigin: true,
            alignment: 'right',
            stopPropagation: false
        });

        /*TELA FULLSCRIN PARA NAVEGADORES*/
        $('.toggle-fullscreen').click(function() {
            switch (navigator.appCodeName) {
                case 'Mozilla':
                    if (document.webkitIsFullScreen) {
                        document.webkitCancelFullScreen();
                    } else {
                        document.documentElement.webkitRequestFullScreen();
                    }
                    break;
            }
        });

        $('.historico').sideNav({edge: 'right'});
    }
}
