import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { SessionGuard } from '../core/guards/session.guard';

const routes: Routes = [
    {path: '', canActivateChild: [SessionGuard], children:[
        {path: 'list', component: StudentListComponent},
        {path: 'details', component: StudentDetailsComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class StudentsRoutingModule{}