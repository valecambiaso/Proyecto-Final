import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourseState from './course-state.reducer';

export const selectCourseState = createFeatureSelector<fromCourseState.CourseState>(
  fromCourseState.courseStateFeatureKey
);

export const loadingCoursesSelector = createSelector(
  selectCourseState,
  (state: fromCourseState.CourseState) => state.loading
);

export const loadedCoursesSelector = createSelector(
  selectCourseState,
  (state: fromCourseState.CourseState) => state.courses
);