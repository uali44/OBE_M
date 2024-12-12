import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Shared/Services/Global/auth.guard';

const routes: Routes = [
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
  }
  ,
  {
    path: 'PLOS',
    loadChildren: () => import('./../authentication/authentication.module').then(m => m.AuthenticationModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
