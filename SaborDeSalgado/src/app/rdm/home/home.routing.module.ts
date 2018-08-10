import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {ProfileComponent} from '../usuario/profile/profile.component';
import {AuthGuard} from '../usuario/guards/auth.guard';

const homeRoutes: Routes = [{
    path: '', component: HomeComponent, children: [
        {
            path: 'user', component: ProfileComponent, children: [
                {
                    path: 'profile', component: ProfileComponent,
                    canActivate: [AuthGuard]
                }
            ]
        }
    ]
},
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
