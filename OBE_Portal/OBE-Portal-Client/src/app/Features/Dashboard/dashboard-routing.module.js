import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './Dashboard-Main/DashboardMain.component';
import { AssignedCoursesComponent } from './assigned-courses/assigned-courses.component';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
const routes = [
    {
        canActivate: [AuthGuard],
        path: '', component: DashboardComponent,
        children: [
            { path: '', redirectTo: '/dashboard/main', pathMatch: 'full' },
            { path: 'main', component: DashboardMainComponent, canActivate: [AuthGuard] },
            { path: 'assign', component: AssignedCoursesComponent, canActivate: [AuthGuard] },
        ]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DashboardRoutingModule);
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map