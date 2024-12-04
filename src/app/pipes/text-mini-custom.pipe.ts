import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textMiniCustom'
})
export class TextMiniCustomPipe implements PipeTransform {

  transform(value: string, textCollapse: boolean): string {
    let text = value.trim();
    let textMini = text.slice(0, 95);
    return textCollapse ? textMini : text;
  }



}
