import { createReducer, on } from '@ngrx/store';
import { CourseState } from '../../../models/course.state';
import { coursesLoaded, loadCourses } from './courses.actions';
const initialState: CourseState = {
    loading: false,
    courses: []
}

export const coursesReducer = createReducer(
    initialState,
    on(loadCourses, (state) => {
        const newState: CourseState = {
            loading: true,
            courses: state.courses
        }
        return newState;
    }),
    on(coursesLoaded, (state, {courses}) => {
        const newState: CourseState = {
            loading: false,
            courses: courses
        }
        return newState;
    })
);