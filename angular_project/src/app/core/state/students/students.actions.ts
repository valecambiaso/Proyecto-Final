import { createAction, props } from "@ngrx/store";
import { Student } from '../../../models/student';

export const loadStudents = createAction(
    '[Student List] Load Students'
);

export const studentsLoaded = createAction(
    '[Student List] Students Loaded', 
    props<{students: Student[]}>()
);