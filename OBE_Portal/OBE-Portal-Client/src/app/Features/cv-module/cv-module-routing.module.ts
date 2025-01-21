import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { FilterComponent } from './filter/filter.component'
const routes: Routes = [

  {
    path: '', component: CvComponentComponent
  }
  ,
  { path: 'search', component: FilterComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvModuleRoutingModule {

}
