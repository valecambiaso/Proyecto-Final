import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomeComponent } from './core/components/home/home.component';
import { StudentListComponent } from './students/components/student-list/student-list.component';
import { StudentDetailsComponent } from './students/components/student-details/student-details.component';
import { CourseListComponent } from './courses/components/course-list/course-list.component';
import { CourseDetailsComponent } from './courses/components/course-details/course-details.component';
import { SessionGuard } from './core/guards/session.guard';

const routes: Routes = [ //Defino las rutas que forman parte del proyecto
    {path: 'home', component: HomeComponent, canActivate: [SessionGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //ruta base -> redirige a ...
    {path: 'students', loadChildren: () => import('./students/students.module').then((module) => module.StudentsModule)},
    {path: 'courses', loadChildren: () => import('./courses/courses.module').then((module) => module.CoursesModule)},
    {path: 'auth', loadChildren: () => import('./authentication/authentication.module').then((module) => module.AuthenticationModule)},
    //{path: 'inscriptions'},
    {path: '**', component: PageNotFoundComponent}, //ruta no existe
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}