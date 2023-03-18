import { ActionReducerMap } from '@ngrx/store';
import { CourseState } from '../../models/course.state';
import { coursesReducer } from './courses/courses.reducers';
import { StudentState } from '../../models/student.state';
import { studentsReducer } from './students/students.reducers';
import { UserState } from '../../models/user.state';
import { usersReducer } from './users/users.reducers';

export interface AppState {
    courses: CourseState,
    students: StudentState,
    users: UserState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    courses: coursesReducer,
    students: studentsReducer,
    users: usersReducer
}