import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvModuleRoutingModule } from './cv-module-routing.module';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CvComponentComponent],
  imports: [
    CommonModule,
    CvModuleRoutingModule,
    ReactiveFormsModule
  
  ]
})
export class CvModuleModule { }
