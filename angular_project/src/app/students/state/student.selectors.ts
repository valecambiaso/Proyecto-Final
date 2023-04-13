import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from './student.reducer';

export const selectStudentState = createFeatureSelector<fromStudent.StudentState>(
  fromStudent.studentFeatureKey
);

export const loadingStudentsSelector = createSelector(
  selectStudentState,
  (state: fromStudent.StudentState) => state.loading
);

export const loadedStudentsSelector = createSelector(
  selectStudentState,
  (state: fromStudent.StudentState) => state.students
);