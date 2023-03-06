import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses$!: BehaviorSubject<Course[]>;

  private courses: Course[] = [
    {
      id: '1',
      commission: 45635,
      courseName: 'Angular',
      openRegistrations: true,
      professorName: 'Julio López'
    },
    {
      id: '2',
      commission: 45374,
      courseName: 'React',
      openRegistrations: true,
      professorName: 'Pedro Sánchez'
    },
    {
      id: '3',
      commission: 45867,
      courseName: 'Vue',
      openRegistrations: false,
      professorName: 'Renata Pérez'
    },
    {
      id: '4',
      commission: 45123,
      courseName: 'NodeJS',
      openRegistrations: true,
      professorName: 'Rosa Aguilar'
    },
  ];

  constructor() {
    this.courses$ = new BehaviorSubject(this.courses);
  }

  getCoursePromise(index: number): Promise<Course>{
    return new Promise((resolve, reject) => {
      let course = this.courses[index];
      if(course){
        resolve(course);
      }else{
        reject({
          errCode: -1,
          description: "error al obtener curso " + index
        });
      }
    });
  }

  getAllCoursesObservable(): Observable<Course[]>{
    return this.courses$.asObservable();
  }
  
  addNewCourse(course:Course):void{
    this.courses.unshift(course);
    this.courses$.next(this.courses);
  }

  editCourses(course:Course, index:number):void{
    this.courses[index] = course;
    this.courses$.next(this.courses);
  }

  removeCourse(courseIndex: number):void{
    this.courses.splice(courseIndex,1);
    this.courses$.next(this.courses);
  }
  
}
