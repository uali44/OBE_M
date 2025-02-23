import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
import { FilterPipe } from './filter';
import { SearchComponent } from '../Components/search/search.component';
import { FormsModule } from '@angular/forms';
let PipessharedModule = class PipessharedModule {
};
PipessharedModule = __decorate([
    NgModule({
        declarations: [HighlightPipe, FilterPipe, SearchComponent],
        imports: [
            CommonModule,
            FormsModule
        ],
        exports: [HighlightPipe, FilterPipe, SearchComponent]
    })
], PipessharedModule);
export { PipessharedModule };
//# sourceMappingURL=pipesshared.module.js.map