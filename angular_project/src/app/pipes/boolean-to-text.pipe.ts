import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToText'
})
export class BooleanToTextPipe implements PipeTransform {

  transform(booleanValue: boolean, ...args: any[]): string {
    return booleanValue ? args[0] : args[1];
  }

}
