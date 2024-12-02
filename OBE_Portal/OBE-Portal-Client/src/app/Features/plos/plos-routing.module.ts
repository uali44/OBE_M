// plos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlosComponent } from './plos/plos.component';


const routes: Routes = [
  { path: '', component: PlosComponent },   // Default route for the module
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlosRoutingModule { }

