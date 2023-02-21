import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const routes: Routes = [ //Defino las rutas que forman parte del proyecto
    {path: 'courses', children:[
        {path: 'details', component: CourseDetailsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule{}