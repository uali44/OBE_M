import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text, search): string {
    try {
      if (search == undefined || text == undefined) {
        return text;
      }
      text = text.toString();
      search = search.toString();

      var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      pattern = pattern.split(' ').filter((t) => {
        return t.length > 0;
      }).join('|');

      var regex = new RegExp(pattern, 'gi');
      return search ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`) : text;
    }
    catch (e) {
      console.error(e);
    }
  }
}

