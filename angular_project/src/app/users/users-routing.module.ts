import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '../core/guards/session.guard';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
    {path: '', canActivateChild: [SessionGuard], children:[
        {path: 'list', component: UsersListComponent},
        {path: 'details', component: UserDetailsComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class UsersRoutingModule{}