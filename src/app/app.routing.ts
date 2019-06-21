import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitComponent } from './visit/visit.component';


const appRoutes: Routes = [
  {
    path: 'visit',
    component: VisitComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
