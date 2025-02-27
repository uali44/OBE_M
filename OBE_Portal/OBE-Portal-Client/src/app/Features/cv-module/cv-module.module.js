import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvModuleRoutingModule } from './cv-module-routing.module';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { IntellectualComponent } from './intellectual/intellectual.component';
import { AcadamicComponent } from './acadamic/acadamic.component';
import { PagerService } from '../../Shared/Services/Global/Pager';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
let CvModuleModule = class CvModuleModule {
};
CvModuleModule = __decorate([
    NgModule({
        declarations: [CvComponentComponent, ProfileComponent, EducationComponent, ExperienceComponent, IndustrialComponent, IntellectualComponent, AcadamicComponent, SearchComponent, FilterComponent],
        imports: [
            CommonModule,
            CvModuleRoutingModule,
            ReactiveFormsModule,
            FormsModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
        ],
        exports: [
            CommonModule,
            FormsModule, // Export FormsModule for other modules
        ],
        providers: [PagerService],
    })
], CvModuleModule);
export { CvModuleModule };
//# sourceMappingURL=cv-module.module.js.map