import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let HighlightPipe = class HighlightPipe {
    transform(text, search) {
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
};
HighlightPipe = __decorate([
    Pipe({ name: 'highlight' })
], HighlightPipe);
export { HighlightPipe };
//# sourceMappingURL=highlight.pipe.js.map