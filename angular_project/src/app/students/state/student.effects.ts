import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { concatMap, map } from "rxjs";
import { addStudent, loadStudents, studentsLoaded, deleteStudent, editStudent } from './student.actions';
import { StudentService } from '../services/student.service';
import { Student } from '../../models/student';

@Injectable()
export class StudentStateEffects {
  loadStudent$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadStudents),
      concatMap(() => {
        return this.studentService.getAllStudentsObservable().pipe(
          map((s: Student[]) => studentsLoaded({students: s}))
        )
      })
    );
  });

  addStudent$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addStudent),
      concatMap(({student}) => {
        return this.studentService.addNewStudent(student).pipe(
          map((s: Student) => loadStudents())
        )
      })
    );
  });

  deleteStudent$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deleteStudent),
      concatMap(({studentId}) => {
        return this.studentService.removeStudent(studentId).pipe(
          map((s: Student) => loadStudents())
        )
      })
    );
  });

  editStudent$ = createEffect(() => {
    return this.action$.pipe(
      ofType(editStudent),
      concatMap(({student, studentId}) => {
        return this.studentService.editStudent(student, studentId).pipe(
          map((s: Student) => loadStudents())
        )
      })
    );
  });

  constructor(
    private studentService: StudentService,
    private action$: Actions
  ){}

}
