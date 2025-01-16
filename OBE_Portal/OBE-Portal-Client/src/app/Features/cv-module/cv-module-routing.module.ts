import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponentComponent } from './cv-component/cv-component.component';

const routes: Routes = [

  {
    path: '', component: CvComponentComponent
  }
 /*{ path: '', component:  }*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvModuleRoutingModule {

}
