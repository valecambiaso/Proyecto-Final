import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/models/student';

export const loadStudents = createAction(
  '[StudentState] Load Students'
);

export const studentsLoaded = createAction(
  '[StudentState] Students Loaded', 
  props<{students: Student[]}>()
);

export const addStudent = createAction(
  '[StudentState] Student Added',
  props<{student: Student}>()
);

export const deleteStudent = createAction(
  '[StudentState] Student Deleted',
  props<{studentId: string}>()
);

export const editStudent = createAction(
  '[StudentState] Student Edited',
  props<{student: Student, studentId: string}>()
);





