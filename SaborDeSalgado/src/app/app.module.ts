import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import {AppRoutingModule} from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
