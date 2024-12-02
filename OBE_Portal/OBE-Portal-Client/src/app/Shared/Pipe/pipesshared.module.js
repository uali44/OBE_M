import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
import { FilterPipe } from './filter';
let PipessharedModule = class PipessharedModule {
};
PipessharedModule = __decorate([
    NgModule({
        declarations: [HighlightPipe, FilterPipe],
        imports: [
            CommonModule
        ],
        exports: [HighlightPipe, FilterPipe]
    })
], PipessharedModule);
export { PipessharedModule };
//# sourceMappingURL=pipesshared.module.js.map