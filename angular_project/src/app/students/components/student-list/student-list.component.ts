import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { StudentFormComponent } from '../student-form/student-form.component';
import { Observable, Subscription, filter, map, from, of } from 'rxjs';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit, OnDestroy{
    dataSource!: MatTableDataSource<Student>;
    dataSource$!: Observable<MatTableDataSource<Student>>; 
    columns: string[] = ['fullname','email','cellphone','bornDate','isActive','actions'];
    suscription!: Subscription;
    students!: Student[];

    constructor(
      private dialog: MatDialog,
      private studentService: StudentService
    ){}

    ngOnInit(): void {
      this.dataSource = new MatTableDataSource<Student>();
      this.suscription = this.studentService.getAllStudentsObservable().subscribe((students: Student[]) => {
        this.dataSource.data = students;
      });
      this.dataSource$ = this.studentService.getAllStudentsObservable().pipe(map((students) => new MatTableDataSource<Student>(students)));
    }

    ngOnDestroy(): void {
      this.suscription.unsubscribe();
    }

    activeStudents(){
      console.log('Alumnos activos: ');
      this.suscription.add(
        this.studentService.activeStudents().subscribe({
          next: (student) => {
            console.log(student.name + ' ' + student.surname)
          }, error: (error) => {
            console.log(error.message)
          }
        })
      );
    }

    removeStudent(studentIndex: number):void{
      this.studentService.removeStudent(studentIndex);
    }

    openModalAdd():void{
      this.openModal(null);
    }

    openModalEdit(studentIndex: number):void{
      this.openModal(studentIndex);
    }

    private openModal(student: any){
      const dialogRef = this.dialog.open(StudentFormComponent, {data: student});
    }

}