import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { StudentsRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentListComponent,
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    
  ]
})
export class StudentsModule { }
