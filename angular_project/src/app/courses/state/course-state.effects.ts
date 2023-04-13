import { Injectable } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCourses, coursesLoaded, addCourse, deleteCourse, editCourse } from './course-state.actions';
import { concatMap, map } from 'rxjs/operators';
import { Course } from '../../models/course';
import { of } from 'rxjs';

@Injectable()
export class CourseStateEffects {
  loadCourse$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadCourses),
      concatMap(() => {
        return this.courseService.getAllCoursesObservable().pipe(
          map((c: Course[]) => coursesLoaded({courses: c}))
        )
      })
    );
  });

  addCourse$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addCourse),
      concatMap(({course}) => {
        return this.courseService.addNewCourse(course).pipe(
          map((c: Course) => loadCourses())
        )
      })
    );
  });

  deleteCourse$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deleteCourse),
      concatMap(({courseId}) => {
        return this.courseService.removeCourse(courseId).pipe(
          map((c: Course) => loadCourses())
        )
      })
    );
  });

  editCourse$ = createEffect(() => {
    return this.action$.pipe(
      ofType(editCourse),
      concatMap(({course, courseId}) => {
        return this.courseService.editCourses(course, courseId).pipe(
          map((c: Course) => loadCourses())
        )
      })
    );
  });

  constructor(
    private courseService: CourseService,
    private action$: Actions
  ){}

}
