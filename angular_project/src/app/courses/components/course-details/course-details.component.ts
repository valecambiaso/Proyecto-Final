import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { ActivatedRoute } from '@angular/router';
import { parseTemplate } from '@angular/compiler';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  course!: Course;

  constructor(
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters) => this.course = {
      commission: parseInt(parameters.get('commission') || ''),
      courseName: parameters.get('courseName') || '',
      professorName: parameters.get('professorName') || '',
      openRegistrations: parameters.get('openRegistrations') === 'true'
    })
  }
 
}
