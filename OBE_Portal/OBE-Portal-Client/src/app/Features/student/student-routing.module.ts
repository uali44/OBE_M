import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
import { StudentMainComponent } from './student-main/student-main.component';
import { RegisteredCoursesComponent } from './registered-courses/registered-courses.component';
import { ExitSurveyFormComponent } from './exit-survey-form/exit-survey-form.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '', component: StudentComponent,
    children: [
      { path: '', redirectTo: '/student/main', pathMatch: 'full' },
      { path: 'main', component: StudentMainComponent, canActivate: [AuthGuard] },
      { path: 'RegisteredCourses', component: RegisteredCoursesComponent, canActivate: [AuthGuard] },
      { path: 'ExitSurveyFrom', component: ExitSurveyFormComponent, canActivate: [AuthGuard] },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
