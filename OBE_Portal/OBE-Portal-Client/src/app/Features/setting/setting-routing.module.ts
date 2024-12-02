import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component'
import { SettingMainComponent } from './setting-main/setting-main.component'
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '', component: SettingComponent,
    children: [
      { path: '', redirectTo: '/settings/main', pathMatch: 'full' },
      { path: 'main', component: SettingMainComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
