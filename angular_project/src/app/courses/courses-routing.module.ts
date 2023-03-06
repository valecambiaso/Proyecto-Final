import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { SessionGuard } from '../core/guards/session.guard';

const routes: Routes = [
    {path: '', canActivateChild: [SessionGuard], children:[
        {path: 'list', component: CourseListComponent},
        {path: 'details', component: CourseDetailsComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CoursesRoutingModule{}