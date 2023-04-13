import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { StudentService } from './services/student.service';
import { StudentsRoutingModule } from './students-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StudentStateEffects } from './state/student.effects';
import { reducer, studentFeatureKey } from './state/student.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentListComponent,
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    StudentsRoutingModule,
    StoreModule.forFeature(studentFeatureKey, reducer),
    EffectsModule.forFeature(StudentStateEffects)
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
