import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportMainComponent } from './report-main/report-main.component';
import { ReportsComponent } from './reports.component';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
const routes = [{
        canActivate: [AuthGuard],
        path: '', component: ReportsComponent,
        children: [
            { path: '', redirectTo: '/reports/main', pathMatch: 'full' },
            { path: 'main', component: ReportMainComponent, canActivate: [AuthGuard] }
            // { path: 'home', component: DashboardComponent, canActivate: [AdminGuardService] }
        ]
    }
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ReportsRoutingModule);
export { ReportsRoutingModule };
//# sourceMappingURL=reports-routing.module.js.map