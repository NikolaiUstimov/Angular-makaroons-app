import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneCustom'
})
export class PhoneCustomPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/^\+?(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5');
  }
}