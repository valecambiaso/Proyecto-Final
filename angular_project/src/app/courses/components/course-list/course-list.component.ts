import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { Course } from '../../../models/course';
import { CourseService } from '../../services/course.service';
import { CourseFormComponent } from '../course-form/course-form.component';
import { SessionService } from '../../../core/services/session.service';
import { Session } from '../../../models/session';
import { AppState } from 'src/app/core/state/app.state';
import { Store } from '@ngrx/store';
import { loadCourses, coursesLoaded } from '../../../core/state/courses/courses.actions';
import { loadedCoursesSelector, loadingCoursesSelector } from '../../../core/state/courses/courses.selectors';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
    dataSource!: MatTableDataSource<Course>;
    dataSource$!: Observable<MatTableDataSource<Course>>; 
    columns: string[] = ['commission','courseName','openRegistration','professorName','actions'];
    suscription!: Subscription;
    courses!: Course[];
    session$!: Observable<Session>;
    loading$!: Observable<Boolean>;

    constructor(
      private dialog: MatDialog,
      private courseService: CourseService,
      private router: Router,
      private session: SessionService,
      private store: Store<AppState>,

    ){}

    ngOnInit(): void {
      this.loading$ = this.store.select(loadingCoursesSelector);
      this.store.dispatch(loadCourses());
      
      this.dataSource = new MatTableDataSource<Course>();
      this.suscription = this.courseService.getAllCoursesObservable().subscribe((courses: Course[]) => {
        this.dataSource.data = courses;
      });
      this.courseService.getAllCoursesObservable().subscribe((courses: Course[]) => {
        this.store.dispatch(coursesLoaded({courses: courses}));
      });
      this.dataSource$ = this.store.select(loadedCoursesSelector).pipe(map((courses) => new MatTableDataSource<Course>(courses)));
      this.session$ = this.session.getSession();
    }

    ngOnDestroy(): void {
      this.suscription.unsubscribe();
    }

    removeCourse(courseId: string):void{
      this.courseService.removeCourse(courseId).subscribe((course: Course) => {
        this.loading$ = this.store.select(loadingCoursesSelector);
        this.store.dispatch(loadCourses());
        this.courseService.getAllCoursesObservable().subscribe((courses: Course[]) => {
          this.store.dispatch(coursesLoaded({courses: courses}));
        });
        this.dataSource$ = this.store.select(loadedCoursesSelector).pipe(map((courses) => new MatTableDataSource<Course>(courses)));  
      });
    }

    openModalAdd():void{
      this.openModal('');
    }

    openModalEdit(courseId: string):void{
      this.openModal(courseId);
    }

    private openModal(course: string){
      const dialogRef = this.dialog.open(CourseFormComponent, {data: course}).afterClosed().subscribe(()=>{
        this.loading$ = this.store.select(loadingCoursesSelector);
        this.store.dispatch(loadCourses());
        this.courseService.getAllCoursesObservable().subscribe((courses: Course[]) => {
          this.store.dispatch(coursesLoaded({courses: courses}));
        });
        this.dataSource$ = this.store.select(loadedCoursesSelector).pipe(map((courses) => new MatTableDataSource<Course>(courses)));
      });
    }

    seeDetails(course: Course){
      this.router.navigate(['courses/details', course]);
    }
}
