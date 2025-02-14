import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvComponentComponent } from './cv-component/cv-component.component';
const routes = [
    {
        path: '', component: CvComponentComponent
    },
];
let CvModuleRoutingModule = class CvModuleRoutingModule {
};
CvModuleRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], CvModuleRoutingModule);
export { CvModuleRoutingModule };
//# sourceMappingURL=cv-module-routing.module.js.map