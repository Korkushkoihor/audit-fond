import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'typeAuditory'
})
export class TypeAuditoryPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    switch (value) {
      case 1: {
        return 'teachers room';
      }
      case 2: {
        return 'library';
      }
      case 3: {
        return 'storage room';
      }
      case 4: {
        return 'practical auditory';
      }
      case 5: {
        return 'laboratory';
      }
      case 6: {
        return 'lecture auditory';
      }
      default: {
        return 'lecture auditory';
      }
    }
  }

}
