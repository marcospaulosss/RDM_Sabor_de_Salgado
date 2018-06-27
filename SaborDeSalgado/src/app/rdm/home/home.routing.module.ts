import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {ProfileComponent} from '../usuario/profile/profile.component';

const homeRoutes: Routes = [{
        path: '', component: HomeComponent, children: [
            {path: 'user', component: ProfileComponent,  children: [
                    {path: 'profile', component: ProfileComponent}
                ]}
        ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
