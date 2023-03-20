import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course';

export const loadCourses = createAction(
  '[CourseState] Load Courses'
);

export const coursesLoaded = createAction(
  '[CourseState] Courses Loaded', 
  props<{courses: Course[]}>()
);

export const addCourse = createAction(
  '[CourseState] Course Added',
  props<{course: Course}>()
);

export const deleteCourse = createAction(
  '[CourseState] Course Deleted',
  props<{courseId: string}>()
);

export const editCourse = createAction(
  '[CourseState] Course Edited',
  props<{course: Course, courseId: string}>()
);

