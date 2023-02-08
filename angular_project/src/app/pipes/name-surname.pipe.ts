import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'nameSurname'
})
export class NameSurnamePipe implements PipeTransform {

  transform(student: Student): string {
    return student.name + ' ' + student.surname;
  }

}
