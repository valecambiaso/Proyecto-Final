import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent {
    students: Student[] = [
      {
        name: 'Alejo',
        surname: 'Torres',
        email: 'alejo@gmail.com',
        cellphone: 154356789,
        bornDate: new Date(1998,10,28),
        isActive: true
      },
      {
        name: 'Ana',
        surname: 'Carrera',
        email: 'ana@gmail.com',
        cellphone: 155654374,
        bornDate: new Date(1999,11,1),
        isActive: true
      },
      {
        name: 'Paula',
        surname: 'Diez',
        email: 'paula@gmail.com',
        cellphone: 156432435,
        bornDate: new Date(1997,9,23),
        isActive: false
      },
      {
        name: 'Diego',
        surname: 'Barrios',
        email: 'diego@gmail.com',
        cellphone: 154637448,
        bornDate: new Date(1998,1,10),
        isActive: false
      },
    ];
    dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);
    columns: string[] = ['fullname','email','cellphone','bornDate','isActive','actions'];

    constructor(
      private dialog: MatDialog
    ){
      
    }

    filterTable($event:Event):void{
      const filterVal = ($event.target as HTMLInputElement).value;
      this.dataSource.filter = filterVal.trim().toLowerCase();
    }

    addNewStudent(student:Student):void{
      this.students.unshift(student);
      this.dataSource = new MatTableDataSource<Student>(this.students);
    }

    editStudent(student:Student, index:number):void{
      this.students.splice(index,1);
      this.students.unshift(student);
      this.dataSource = new MatTableDataSource<Student>(this.students);
    }

    removeStudent(studentIndex: number):void{
      this.students.splice(studentIndex,1);
      this.dataSource = new MatTableDataSource<Student>(this.students);
    }

    openModalAdd():void{
      this.openModal(null);
    }

    openModalEdit(studentIndex: number):void{
      this.openModal(this.students[studentIndex]);
    }

    private openModal(student: any){
      const dialogRef = this.dialog.open(StudentFormComponent, {data: student});
      dialogRef.componentInstance.newStudentEvent.subscribe((student:Student) => {
        this.addNewStudent(student);
      });

      dialogRef.componentInstance.editStudentEvent.subscribe((student:Student) => {
        let index = this.students.indexOf(dialogRef.componentInstance.student);
        this.editStudent(student,index);
      });
      
      dialogRef.afterClosed().subscribe(() => {
        dialogRef.componentInstance.newStudentEvent.unsubscribe();
        dialogRef.componentInstance.editStudentEvent.unsubscribe();
      });
    }
}

