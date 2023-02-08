import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentListComponent } from '../student-list/student-list.component';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent{
  action: string;
  studentForm: FormGroup;
  @Output() newStudentEvent = new EventEmitter<Student>();
  @Output() editStudentEvent = new EventEmitter<Student>();
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public student: Student
  ){
    this.action = student != null ? 'Editar' : 'Crear';

    if(student == null){
      this.studentForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(15)]], 
        surname: ['', [Validators.required, Validators.maxLength(15)]], 
        email: ['', [Validators.required, Validators.email]],
        cellphone: ['', [Validators.required, Validators.pattern('^[0-9]{9,15}$')]],
        bornDate: ['', Validators.required],
        isActive: [false]
      });
    }else{
      this.studentForm = this.formBuilder.group({
        name: [this.student.name, [Validators.required, Validators.maxLength(15)]], 
        surname: [this.student.surname, [Validators.required, Validators.maxLength(15)]], 
        email: [this.student.email, [Validators.required, Validators.email]],
        cellphone: [this.student.cellphone, [Validators.required, Validators.pattern('^[0-9]{9,15}$')]],
        bornDate: [this.student.bornDate, Validators.required],
        isActive: [this.student.isActive]
      });
    }
  }

  addStudent(){
    const student: Student = {
      name: this.studentForm.get('name')!.value,
      surname: this.studentForm.get('surname')!.value,
      email: this.studentForm.get('email')!.value,
      cellphone: this.studentForm.get('cellphone')!.value,
      bornDate: this.studentForm.get('bornDate')!.value,
      isActive: this.studentForm.get('isActive')!.value
    };

    if(this.student != null){
      this.editStudentEvent.emit(student);
    }else{
      this.newStudentEvent.emit(student);
    }
    this.closeForm();
  }

  closeForm(){
    this.dialogRef.close();
  }
}
