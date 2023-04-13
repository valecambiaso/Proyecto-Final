import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { StudentFormComponent } from '../student-form/student-form.component';
import { Observable, Subscription, filter, map, from, of } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/core/services/session.service';
import { Store } from '@ngrx/store';
import { StudentState } from '../../state/student.reducer';
import { loadStudents, studentsLoaded, deleteStudent } from '../../state/student.actions';
import { loadedStudentsSelector, loadingStudentsSelector } from '../../state/student.selectors';
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
    session$!: Observable<Session>;
    loading$!: Observable<Boolean>;

    constructor(
      private dialog: MatDialog,
      private studentService: StudentService,
      private router: Router,
      private session: SessionService,
      private store: Store<StudentState>,
    ){}

    ngOnInit(): void {
      this.loading$ = this.store.select(loadingStudentsSelector);
      this.store.dispatch(loadStudents());

      this.dataSource = new MatTableDataSource<Student>();
      this.suscription = this.studentService.getAllStudentsObservable().subscribe((students: Student[]) => {
        this.dataSource.data = students;
      });

      this.dataSource$ = this.store.select(loadedStudentsSelector).pipe(map((students) => new MatTableDataSource<Student>(students)));
      this.session$ = this.session.getSession();
    }

    ngOnDestroy(): void {
      this.suscription.unsubscribe();
    }

    removeStudent(studentId: string):void{
      this.loading$ = this.store.select(loadingStudentsSelector);
       this.store.dispatch(deleteStudent({studentId}));
    }

    openModalAdd():void{
      this.openModal('');
    }

    openModalEdit(studentId: string):void{
      this.openModal(studentId);
    }

    private openModal(student: string){
      const dialogRef = this.dialog.open(StudentFormComponent, {data: student}).afterClosed().subscribe(()=>{
        this.loading$ = this.store.select(loadingStudentsSelector);
        this.store.dispatch(loadStudents());
        this.studentService.getAllStudentsObservable().subscribe((students: Student[]) => {
          this.store.dispatch(studentsLoaded({students: students}))
        });
        this.dataSource$ = this.store.select(loadedStudentsSelector).pipe(map((students) => new MatTableDataSource<Student>(students)));
      });
    }

    seeDetails(student: Student){
      this.router.navigate(['students/details', student]);
    }
}