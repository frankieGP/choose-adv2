
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { JourneyComponent } from './journey/journey.component';
import { PathDetailComponent } from './path-detail/path-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'journey',
    component: JourneyComponent
  },
  {
    path: 'paths/:id',
    component: PathDetailComponent

  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
