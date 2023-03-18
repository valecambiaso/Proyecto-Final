import { createReducer, on } from '@ngrx/store';
import { StudentState } from '../../../models/student.state';
import { studentsLoaded, loadStudents } from './students.actions';
const initialState: StudentState = {
    loading: false,
    students: []
}

export const studentsReducer = createReducer(
    initialState,
    on(loadStudents, (state) => {
        const newState: StudentState = {
            loading: true,
            students: initialState.students
        }
        return newState;
    }),
    on(studentsLoaded, (state, {students}) => {
        const newState: StudentState = {
            loading: false,
            students: students
        }
        return newState;
    })
);