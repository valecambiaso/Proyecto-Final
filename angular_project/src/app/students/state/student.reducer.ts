import { createFeature, createReducer, on } from '@ngrx/store';
import * as StudentActions from './student.actions';
import { Student } from '../../models/student';

export const studentFeatureKey = 'studentState';

export interface StudentState {
  loading: boolean;
  students: Student[];
}

export const initialState: StudentState = {
  loading: false,
  students: []
};

export const reducer = createReducer(
  initialState,
  on(StudentActions.loadStudents, (state) => {
    return {...state, loading: true};
  }),

  on(StudentActions.studentsLoaded, (state, {students}) => {
    return {...state, loading: false, students: students};
  }),
  on(StudentActions.addStudent, (state, {student: Student}) => {
    return state;
  }),
  on(StudentActions.editStudent, (state, {student: Student,studentId: string}) => {
    return state;
  }),
  on(StudentActions.deleteStudent, (state, {studentId: string}) => {
    return state;
  })
);
