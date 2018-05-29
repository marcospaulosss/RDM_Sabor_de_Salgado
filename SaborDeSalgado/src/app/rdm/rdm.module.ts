import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {RdmComponent} from "./rdm.component";
import {RdmRoutingModule} from "./rdm.routing.module";

@NgModule({
    imports: [
        CommonModule,
        RdmRoutingModule,
    ],
    declarations: [
        RdmComponent
    ],
    providers: [
    ]
})
export class RdmModule { }
