import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework.component'
import { FrameworkMainComponent } from './framework-main/framework-main.component'
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '', component: FrameworkComponent,
    children: [
      { path: '', redirectTo: '/framework/main', pathMatch: 'full' },
      { path: 'main', component: FrameworkMainComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworkRoutingModule { }
