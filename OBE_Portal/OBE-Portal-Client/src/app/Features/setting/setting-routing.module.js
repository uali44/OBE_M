import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';
import { SettingMainComponent } from './setting-main/setting-main.component';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
const routes = [
    {
        canActivate: [AuthGuard],
        path: '', component: SettingComponent,
        children: [
            { path: '', redirectTo: '/settings/main', pathMatch: 'full' },
            { path: 'main', component: SettingMainComponent, canActivate: [AuthGuard] },
        ]
    }
];
let SettingRoutingModule = class SettingRoutingModule {
};
SettingRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SettingRoutingModule);
export { SettingRoutingModule };
//# sourceMappingURL=setting-routing.module.js.map