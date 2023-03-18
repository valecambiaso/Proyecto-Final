import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { StudentState } from '../../../models/student.state';

export const studentSelector = (state: AppState) => {
    return state.students;
};

export const loadingStudentsSelector = createSelector(
    studentSelector,
    (state: StudentState) => {
        return state.loading;
    }
);

export const loadedStudentsSelector = createSelector(
    studentSelector,
    (state: StudentState) => {
        return state.students; 
    }
)