import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvModuleRoutingModule } from './cv-module-routing.module';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { IntellectualComponent } from './intellectual/intellectual.component';
import { AcadamicComponent } from './acadamic/acadamic.component';

@NgModule({
  declarations: [CvComponentComponent, ProfileComponent, EducationComponent, ExperienceComponent, IndustrialComponent, IntellectualComponent, AcadamicComponent],
  imports: [
    CommonModule,
    CvModuleRoutingModule,
    ReactiveFormsModule
  
  ]
})
export class CvModuleModule { }
