import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { StudentListComponent } from './students/components/student-list/student-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [ //Defino las rutas que forman parte del proyecto
    {path: '', redirectTo: 'students', pathMatch: 'full'}, //ruta base -> redirige a ...
    {path: '**', component: PageNotFoundComponent}, //ruta no existe
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}