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
import { StoreModule } from '@ngrx/store';
import { courseStateFeatureKey, reducer } from './state/course-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseStateEffects } from './state/course-state.effects';

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
        CoursesRoutingModule,
        StoreModule.forFeature(courseStateFeatureKey, reducer),
        EffectsModule.forFeature(CourseStateEffects)
    ],
    providers:[
        CourseService
    ]
})
export class CoursesModule{}