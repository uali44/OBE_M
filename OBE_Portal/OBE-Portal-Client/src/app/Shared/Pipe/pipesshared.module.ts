import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
import { FilterPipe } from './filter';


@NgModule({
  declarations: [HighlightPipe, FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [HighlightPipe, FilterPipe]
})
export class PipessharedModule { }
