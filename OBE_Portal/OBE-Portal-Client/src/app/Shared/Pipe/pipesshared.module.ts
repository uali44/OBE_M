import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
import { FilterPipe } from './filter';
import { SearchComponent } from '../Components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HighlightPipe, FilterPipe, SearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HighlightPipe, FilterPipe]
})
export class PipessharedModule { }
