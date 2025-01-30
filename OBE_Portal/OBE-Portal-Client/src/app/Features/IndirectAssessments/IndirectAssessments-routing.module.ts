import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndirectAssessmentsComponent } from './IndirectAssessments.component'
import { IndirectAssessmentsMainComponent } from './IndirectAssessments-main/IndirectAssessments-main.component'
import { QuestionairesComponent } from '../IndirectAssessments/questionaires/questionaires.component'
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '', component: IndirectAssessmentsComponent,
    children: [
      { path: '', redirectTo: '/indirectAssessment/main', pathMatch: 'full' },
      { path: 'main', component: IndirectAssessmentsMainComponent, canActivate: [AuthGuard] },
      { path: 'main/Survey', component: QuestionairesComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndirectAssessmentsRoutingModule { }
