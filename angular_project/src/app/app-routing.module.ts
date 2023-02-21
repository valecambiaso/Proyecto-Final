import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomeComponent } from './core/components/home/home.component';
import { StudentListComponent } from './students/components/student-list/student-list.component';
import { StudentDetailsComponent } from './students/components/student-details/student-details.component';
import { CourseListComponent } from './courses/components/course-list/course-list.component';
import { CourseDetailsComponent } from './courses/components/course-details/course-details.component';

const routes: Routes = [ //Defino las rutas que forman parte del proyecto
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //ruta base -> redirige a ...
    {path: 'students', children:[
        {path: 'list', component: StudentListComponent},
        {path: 'details', component: StudentDetailsComponent},
    ]},
    {path: 'courses', children:[
        {path: 'list', component: CourseListComponent},
        {path: 'details', component: CourseDetailsComponent},
    ]},
    //{path: 'inscriptions'},
    {path: '**', component: PageNotFoundComponent}, //ruta no existe
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}