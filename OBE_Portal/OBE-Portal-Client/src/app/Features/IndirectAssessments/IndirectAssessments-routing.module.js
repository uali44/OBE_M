import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndirectAssessmentsComponent } from './IndirectAssessments.component';
import { IndirectAssessmentsMainComponent } from './IndirectAssessments-main/IndirectAssessments-main.component';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
const routes = [
    {
        canActivate: [AuthGuard],
        path: '', component: IndirectAssessmentsComponent,
        children: [
            { path: '', redirectTo: '/indirectAssessment/main', pathMatch: 'full' },
            { path: 'main', component: IndirectAssessmentsMainComponent, canActivate: [AuthGuard] },
        ]
    }
];
let IndirectAssessmentsRoutingModule = class IndirectAssessmentsRoutingModule {
};
IndirectAssessmentsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], IndirectAssessmentsRoutingModule);
export { IndirectAssessmentsRoutingModule };
//# sourceMappingURL=IndirectAssessments-routing.module.js.map