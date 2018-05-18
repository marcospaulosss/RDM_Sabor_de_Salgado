import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";

import {MaterializeModule} from 'angular2-materialize';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from "./app.routing.module";
import {LoginService} from "./login/login.service";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        MaterializeModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
