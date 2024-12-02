import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework.component';
import { FrameworkMainComponent } from './framework-main/framework-main.component';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
const routes = [
    {
        canActivate: [AuthGuard],
        path: '', component: FrameworkComponent,
        children: [
            { path: '', redirectTo: '/framework/main', pathMatch: 'full' },
            { path: 'main', component: FrameworkMainComponent, canActivate: [AuthGuard] },
        ]
    }
];
let FrameworkRoutingModule = class FrameworkRoutingModule {
};
FrameworkRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], FrameworkRoutingModule);
export { FrameworkRoutingModule };
//# sourceMappingURL=framework-routing.module.js.map