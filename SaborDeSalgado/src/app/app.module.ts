import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterializeModule} from 'angular2-materialize';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app.routing.module';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        MaterializeModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
