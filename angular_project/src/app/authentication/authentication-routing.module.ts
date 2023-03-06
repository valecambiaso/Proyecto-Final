import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialAuthComponent } from './components/initial-auth/initial-auth.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {path: '', component: InitialAuthComponent, children: [
        {path: 'login', component: LoginComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthenticationRoutingModule{}