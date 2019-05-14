import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(name: string, args?: any): any {
    return `Hello ${name}`;
  }

}
