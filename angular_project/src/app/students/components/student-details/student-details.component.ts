import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  student!: Student;

  constructor(
    private activatedRoute: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.getBasicDetails();
  }

  private getBasicDetails() : void{
    this.activatedRoute.paramMap.subscribe((parameters) => this.student = {
      id: parameters.get('id') || '',
      name: parameters.get('name') || '',
      surname: parameters.get('surname') || '',
      email: parameters.get('email') || '',
      cellphone: parseInt(parameters.get('cellphone') || ''),
      bornDate: new Date(parameters.get('bornDate') || ''),
      isActive: parameters.get('isActive') === 'true'
    });
  }
}
