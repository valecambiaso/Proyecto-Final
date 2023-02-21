import { NgModule } from "@angular/core";
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CoursesRoutingModule } from "./course-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        CourseDetailsComponent,
        CourseListComponent,
        CourseFormComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        CoursesRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers:[]
})
export class CoursesModule{}