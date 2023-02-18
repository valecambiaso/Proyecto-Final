import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { StudentsRoutingModule } from './student-routing.module';
import { NameSurnamePipe } from '../pipes/name-surname.pipe';
import { BooleanToTextPipe } from '../pipes/boolean-to-text.pipe';
import { StudentService } from '../services/student.service';
import { TitleStyleDirective } from '../directives/title-style.directive';
import { AppModule } from '../app.module';

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
    NameSurnamePipe,
    BooleanToTextPipe,
    TitleStyleDirective,
    AppModule
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
