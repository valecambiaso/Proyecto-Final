import { NgModule } from "@angular/core";
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseService } from "./services/course.service";

@NgModule({
    declarations:[
        CourseDetailsComponent,
        CourseListComponent,
        CourseFormComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule,
        CoursesRoutingModule
    ],
    providers:[
        CourseService
    ]
})
export class CoursesModule{}