import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textMiniCustom'
})
export class TextMiniCustomPipe implements PipeTransform {

  transform(value: string): string {
    let str: string = value.slice(0, 95);
    let strSplit: string[] = str.split(' ');
    strSplit.splice(strSplit.length-1, 1);
    str = strSplit.join(' ');
    return str + ' ...';
  }

}
