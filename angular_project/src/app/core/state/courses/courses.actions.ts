import { createAction, props } from "@ngrx/store";
import { Course } from '../../../models/course';

export const loadCourses = createAction(
    '[Course List] Load Courses'
);

export const coursesLoaded = createAction(
    '[Course List] Courses Loaded', 
    props<{courses: Course[]}>()
);