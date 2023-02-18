import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [ //Defino las rutas que forman parte del proyecto
    {path: 'students', children:[
        {path: 'list', component: StudentListComponent},
        {path: 'details/:id', component: StudentDetailsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule{}