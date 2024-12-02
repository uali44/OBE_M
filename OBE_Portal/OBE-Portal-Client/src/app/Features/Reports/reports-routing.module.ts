import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportMainComponent } from './report-main/report-main.component'
import { ReportsComponent } from './reports.component'
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';

const routes: Routes = [{
  canActivate: [AuthGuard],
  path: '', component: ReportsComponent,
  children: [
    { path: '', redirectTo: '/reports/main', pathMatch: 'full' },
    { path: 'main', component: ReportMainComponent, canActivate: [AuthGuard] }
    // { path: 'home', component: DashboardComponent, canActivate: [AdminGuardService] }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
