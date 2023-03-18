import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CourseState } from '../../../models/course.state';

export const courseSelector = (state: AppState) => {
    return state.courses;
};

export const loadingCoursesSelector = createSelector(
    courseSelector,
    (state: CourseState) => {
        return state.loading;
    }
);

export const loadedCoursesSelector = createSelector(
    courseSelector,
    (state: CourseState) => {
        return state.courses; //Observable con los cursos
    }
)