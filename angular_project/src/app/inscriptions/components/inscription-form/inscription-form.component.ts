import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../../students/services/student.service';
import { CourseService } from '../../../courses/services/course.service';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { Course } from 'src/app/models/course';
import { MatDialogRef } from '@angular/material/dialog';
import { InscriptionService } from '../../services/inscription.service';
import { Inscription } from '../../../models/inscription';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent {
  inscriptionForm!: FormGroup;
  students$!: Observable<Student[]>;
  courses$!: Observable<Course[]>; 

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private inscriptionService: InscriptionService,
    private dialogRef: MatDialogRef<InscriptionFormComponent>,
  ){
    this.buildForm();
  }
  
  private buildForm(): void{
    this.students$ = this.studentService.getAllStudentsObservable();
    this.courses$ = this.courseService.getAllCoursesObservable();

    this.inscriptionForm = new FormGroup({
      student: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required]) 
    });
  }

  addInscription() : void{
    let student : Student = this.inscriptionForm.get('student')!.value;
    let course : Course = this.inscriptionForm.get('course')!.value;

    let inscription : Inscription = {
      studentId: student.id,
      studentFullName: student.name + ' ' + student.surname,
      courseId: course.id || '',
      courseName: course.courseName,
    }

    this.inscriptionService.addNewInscription(inscription).subscribe((inscription:Inscription) => {});
    this.closeForm();
  }

  closeForm(): void{
    this.dialogRef.close();
  }
}
