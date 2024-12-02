import { __decorate } from "tslib";
// plos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlosComponent } from './plos/plos.component';
const routes = [
    { path: '', component: PlosComponent }, // Default route for the module
];
let PlosRoutingModule = class PlosRoutingModule {
};
PlosRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PlosRoutingModule);
export { PlosRoutingModule };
//# sourceMappingURL=plos-routing.module.js.map