import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student';
import { StudentService } from '../../services/student.service';
import { Store } from '@ngrx/store';
import { StudentState } from 'src/app/models/student.state';
import { addStudent, editStudent } from '../../state/student.actions';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent{
  action!: string;
  studentForm!: FormGroup;
  student!: Student;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private dialogRef: MatDialogRef<StudentFormComponent>,
    private store: Store<StudentState>,
    @Inject(MAT_DIALOG_DATA) public studentId: string
  ){
    this.buildFormAdd();
    if(this.studentId != ''){
      this.buildFormEdit();
    }
  }

  private buildFormEdit(): void{
    this.studentService.getStudentById(this.studentId).subscribe((student: Student) => {
      this.student = student;

      this.action = 'Editar';

      this.studentForm = this.formBuilder.group({
        name: [this.student.name, [Validators.required, Validators.maxLength(15)]], 
        surname: [this.student.surname, [Validators.required, Validators.maxLength(15)]], 
        email: [this.student.email, [Validators.required, Validators.email]],
        cellphone: [this.student.cellphone, [Validators.required, Validators.pattern('^[0-9]{9,15}$')]],
        bornDate: [this.student.bornDate, Validators.required],
        isActive: [this.student.isActive]
      });
    });
  }

  private buildFormAdd(): void{
    this.action = 'Crear';

    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(15)]], 
      surname: ['', [Validators.required, Validators.maxLength(15)]], 
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.required, Validators.pattern('^[0-9]{9,15}$')]],
      bornDate: ['', Validators.required],
      isActive: [false]
    });
  }

  addStudent(): void{
    const student: Student = {
      id: this.studentId,
      name: this.studentForm.get('name')!.value,
      surname: this.studentForm.get('surname')!.value,
      email: this.studentForm.get('email')!.value,
      cellphone: this.studentForm.get('cellphone')!.value,
      bornDate: this.studentForm.get('bornDate')!.value,
      isActive: this.studentForm.get('isActive')!.value
    };

    if(this.studentId != ''){
      this.store.dispatch(editStudent({student: student, studentId: this.studentId}))
    }else{
      this.store.dispatch(addStudent({student: student}))
    }
    this.closeForm();
  }

  closeForm(): void{
    this.dialogRef.close();
  }
}
