import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitComponent } from './visit/visit.component';
import { VisitDetailComponent }   from './visit-detail/visit-detail.component';



const appRoutes: Routes = [
  {
    path: 'visit',
    component: VisitComponent
  },
  {
  path: 'visits/:id',
  component: VisitDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
