import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
const routes = [
    { path: '', component: LoginComponent },
    { path: 'ForgetPassword', component: ForgetPasswordComponent },
    { path: 'ResetPassword', component: ResetPasswordComponent } // When the module is loaded, display HomeComponent
];
let AuthenticationRoutingModule = class AuthenticationRoutingModule {
};
AuthenticationRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AuthenticationRoutingModule);
export { AuthenticationRoutingModule };
//# sourceMappingURL=authentication-routing.module.js.map