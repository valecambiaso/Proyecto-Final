import { NgModule } from "@angular/core";
import { Inscription } from '../models/inscription';
import { InscriptionFormComponent } from './components/inscription-form/inscription-form.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../students/services/student.service';
import { CourseService } from '../courses/services/course.service';
import { InscriptionService } from './services/inscription.service';
import { InscriptionsRoutingModule } from "./inscription-routing.module";
import { SharedModule } from "../shared/shared.module";
import { InscriptionListComponent } from './components/inscription-list/inscription-list.component';

@NgModule({
    declarations: [
        InscriptionFormComponent,
        InscriptionListComponent
    ],
    providers: [
        StudentService,
        CourseService,
        InscriptionService
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        InscriptionsRoutingModule,
        SharedModule
    ]
})
export class InscriptionModule{}