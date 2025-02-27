import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../Shared/Services/Global/auth.guard';
const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./../Features/Dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'reports',
        loadChildren: () => import('./../Features/Reports/reports.module').then(m => m.ReportsModule),
        canActivate: [AuthGuard]
    }, {
        path: 'student',
        loadChildren: () => import('./../Features/student/student.module').then(m => m.StudentModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'framework',
        loadChildren: () => import('./../Features/Framework/framework.module').then(m => m.FrameworkModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        loadChildren: () => import('./../Features/setting/setting.module').then(m => m.SettingModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'indirectAssessment',
        loadChildren: () => import('./../Features/IndirectAssessments/IndirectAssessments.module').then(m => m.IndirectAssessmentsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'PLOS',
        loadChildren: () => import('./../Features/plos/plos.module').then(m => m.PLOSModule),
        canActivate: [AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: false })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map